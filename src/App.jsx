import { BrowserRouter, Route, Routes, Navigate, HashRouter } from 'react-router-dom';
import { register } from 'swiper/element/bundle';
<<<<<<< HEAD
//import MoviesProvider from './context/MoviesProvider';
import { HomeView } from './features/home/homeView';
import { LoginView } from './features/login/loginView';
import { DetailView } from './features/detailView/detailView';
//import { MoviesContext } from './context/MoviesContext';
import DiscoverView  from './features/discoverView/discoverView';
import { useAuth } from "./context/AuthContext";
=======
>>>>>>> 951387c5d262ab54fb91f0d39af7c847bcfb2fa8
import MoviesProvider from './context/MoviesProvider';
import { lazy } from 'react';
import { Suspense } from 'react';
import Spinner from './core/components/spinner/spinner';
import HomeView from './features/home/homeView';
import LoginView from './features/login/loginView';
import DetailView from './features/detailView/detailView';
import DiscoverView from './features/discoverView/discoverView';
// import { useAuth } from "./context/AuthContext";
import RequireAuth from './features/login/RequireAuth';


register()

const App = () => {
    // const { currentUser } = useAuth()

    return(
        // <MoviesProvider>
        //     <HashRouter>
        //        <Suspense fallback={<Spinner/>}>
        //             <Routes>
        //                 <Route path='/login' element={<LoginView/>}/>
        //                 <Route path='/' element={<HomeView/>}/>
        //                 <Route path='/movie/:slug' element={<DetailView/>}/>
        //                 <Route path='/tv/:slug' element={<DetailView/>}/>
        //                 <Route path='/movie' element={<DiscoverView/>}/>
        //                 <Route path='/tv' element={<DiscoverView/>}/>
        //             </Routes>
        //         </Suspense>
        //     </HashRouter>
        // </MoviesProvider>

    // const RequireAuth = ({ children }) => {
    //     return currentUser ? (
    //         <>
    //             <MoviesProvider>
    //                 {children}
    //             </MoviesProvider>
    //         </>
    //     ) : (
    //         <Navigate to="/" />
    //     );
    // };


        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginView />} />
                <Route path='/inicio' element={<RequireAuth><HomeView /></RequireAuth>} />
                <Route path='/movie/:slug' element={<RequireAuth><DetailView /></RequireAuth>} />
                <Route path='/tv/:slug' element={<RequireAuth><DetailView /></RequireAuth>} />
                <Route path='/movie' element={<RequireAuth><DiscoverView /></RequireAuth>} />
                <Route path='/tv' element={<RequireAuth><DiscoverView /></RequireAuth>} />
                <Route path='/my-list' element={<RequireAuth><DiscoverView /></RequireAuth>} />
            </Routes>
        </BrowserRouter>
    )
};

export { App }