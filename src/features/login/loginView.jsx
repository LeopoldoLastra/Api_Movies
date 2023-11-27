import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { auth } from "./firebase/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import './loginView.css';

const LoginView = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();


    const togglePasswordVisibility = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

    const clearError = () => {
        setError("");
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/inicio');
        } catch (error) {
            console.error("Submit Login.jsx " + error);
            setError(true);
            setTimeout(clearError, 3000);
        }
    };

    return (
        <div className="login-body">
            <div className="container-login">
                {/*<div className="background-container">
                    <img
                        className="background-image"
                        alt="Background"
                    />
                </div>*/}

                <div className="form-container sign-in-container">
                    {/*<img className="logo" src={logo} alt="imagen logo principal" />*/}
                    <form className="form-login" onSubmit={submit}>
                        <h1 className="h1-login-left">Iniciar Sesión</h1>
                        <div className="email">
                            <input
                                className="input-login"
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                id="email"
                                placeholder="Email"
                                autoComplete="current-email"
                            />
                        </div>
                        <div className="password" style={{ display: "flex", marginLeft: "32px" }}>
                            <input
                                className="input-login"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                type={showPassword ? "text" : "password"}
                                id="password"
                                placeholder="Password"
                                autoComplete="current-password"
                            />
                            <button
                                className="eye-password"
                                onClick={togglePasswordVisibility}
                                tabIndex="-1"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        {error && (
                            <span className="error">Informacion de Sesion Incorrecta.</span>
                        )}


                        <button className="button-login" type="submit">
                            Ingresar
                        </button>
                    </form>
                </div>

                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h1 className="h1-login">Insertar LOGO/MARCA</h1>
                            <p className="p-login">Descripcion corta</p>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <p className="p-login">
                    Creado por
                    Equipo Codo a Codo - Mati, Fede, Leo y Pati
                </p>
            </footer>
        </div>
    );
};

export { LoginView };