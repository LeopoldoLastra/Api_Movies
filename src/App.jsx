import { BrowserRouter, Route, Routes, Navigate, HashRouter } from 'react-router-dom';
import { register } from 'swiper/element/bundle';
import MoviesProvider from './context/MoviesProvider';
import { lazy } from 'react';
import { Suspense } from 'react';
import Spinner from './core/components/spinner/spinner';
import HomeView from './features/home/homeView';
import LoginView from './features/login/loginView';
import DetailView from './features/detailView/detailView';
import DiscoverView from './features/discoverView/discoverView';
import RequireAuth from './features/login/RequireAuth';
import Proximamente from './features/otherView/Proximamente';


register()

const App = () => {

    return(

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginView />} />
                <Route path='/inicio' element={<RequireAuth><HomeView /></RequireAuth>} />
                <Route path='/movie/:slug' element={<RequireAuth><DetailView /></RequireAuth>} />
                <Route path='/tv/:slug' element={<RequireAuth><DetailView /></RequireAuth>} />
                <Route path='/movie' element={<RequireAuth><DiscoverView /></RequireAuth>} />
                <Route path='/tv' element={<RequireAuth><DiscoverView /></RequireAuth>} />
                <Route path='/my-list' element={<RequireAuth><DiscoverView /></RequireAuth>} />
                <Route path='/nosotros' element={<RequireAuth><Proximamente /></RequireAuth>} />
                <Route path='/contacto' element={<RequireAuth><Proximamente /></RequireAuth>} />

            </Routes>
        </BrowserRouter>
    )
};

export { App }