import React from 'react';
import { HashRouter, Route, Routes} from 'react-router-dom';
import { register } from 'swiper/element/bundle';
import MoviesProvider from './context/MoviesProvider';
import { HomeView } from './features/home/homeView';
import { LoginView } from './features/login/loginView';
import { MovieView } from './features/movie/movieView';
import { DetailView } from './features/detailView/detailView';
import {MoviesContext} from './context/MoviesContext';
import { DiscoverView } from './features/discoverView/discoverView';

register()

const App = ()=>{

    
    return(
        <MoviesProvider>
            <HashRouter>
               
                <Routes>
                    <Route path='/' element={<HomeView/>}/>
                    <Route path='/login' element={<LoginView/>}/>
                    <Route path='/movie/:slug' element={<DetailView/>}/>
                    <Route path='/tv/:slug' element={<DetailView/>}/>
                    <Route path='/movie' element={<DiscoverView/>}/>
                    <Route path='/tv' element={<DiscoverView/>}/>

                </Routes>
            </HashRouter>
        </MoviesProvider>
    )
};

export {App}