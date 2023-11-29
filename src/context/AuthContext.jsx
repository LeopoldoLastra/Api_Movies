import { createContext, useContext, useEffect, useReducer } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../features/login/firebase/firebase";

// const auth = getAuth();

const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, currentUser: action.payload, loading: false };
        case "LOGOUT":
            return { ...state, currentUser: null, loading: false };
        default:
            return state;
    }
};

const initialState = {
    currentUser: null,
    loading: true,
};

const authContext = createContext();

export function AuthContextProvider({ children }) {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch({ type: "LOGIN", payload: user });
            } else {
                dispatch({ type: "LOGOUT" });
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);

    if (state.loading) {
        return <div className="w-100">
            <span className="loader position-absolute start-50 top-50 mt-3"></span>
        </div>;
    }

    return (
        <authContext.Provider 
            value={{ 
                currentUser: state.currentUser
            }}>
            {children}
        </authContext.Provider>
    );
}

export function useAuth() {
    return useContext(authContext);
}
