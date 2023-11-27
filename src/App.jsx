import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { register } from 'swiper/element/bundle';
//import MoviesProvider from './context/MoviesProvider';
import { HomeView } from './features/home/homeView';
import { LoginView } from './features/login/loginView';
import { DetailView } from './features/detailView/detailView';
//import { MoviesContext } from './context/MoviesContext';
import { DiscoverView } from './features/discoverView/discoverView';
import { useAuth } from "./context/AuthContext";
import MoviesProvider from './context/MoviesProvider';

register()

const App = () => {
    const { currentUser } = useAuth()

    const RequireAuth = ({ children }) => {
        return currentUser ? (
            <>
                <MoviesProvider>
                    {children}
                </MoviesProvider>
            </>
        ) : (
            <Navigate to="/" />
        );
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginView />} />
                <Route path='/inicio' element={<RequireAuth><HomeView /></RequireAuth>} />
                <Route path='/movie/:slug' element={<RequireAuth><DetailView /></RequireAuth>} />
                <Route path='/tv/:slug' element={<RequireAuth><DetailView /></RequireAuth>} />
                <Route path='/movie' element={<RequireAuth><DiscoverView /></RequireAuth>} />
                <Route path='/tv' element={<RequireAuth><DiscoverView /></RequireAuth>} />
            </Routes>
        </BrowserRouter>
    )
};

export { App }