import React from 'react';
import { HashRouter, Route, Routes} from 'react-router-dom';
import { register } from 'swiper/element/bundle';
import MoviesProvider from './context/MoviesProvider';
import { HomeView } from './features/home/homeView';
import { LoginView } from './features/login/loginView';
import { MovieView } from './features/movie/movieView';

register()



const App = ()=>{

    
    return(
        <MoviesProvider>
            <HashRouter>
               
                <Routes>
                    <Route path='/' element={<HomeView/>}/>
                    <Route path='/login' element={<LoginView/>}/>
                    <Route path='/movie/:slug' element={<MovieView/>}/>
                </Routes>
            </HashRouter>
        </MoviesProvider>
    )
};

export {App}