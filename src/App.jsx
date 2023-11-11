import React from 'react';
import { HashRouter, Route, Routes} from 'react-router-dom';

import { HomeView } from './features/home/homeView';
import { LoginView } from './features/login/loginView';
import { MovieView } from './features/movie/movieView';

const App = ()=>{
    return(
        <>
            <HashRouter>
               
                <Routes>
                    <Route path='/' element={<HomeView/>}/>
                    <Route path='/login' element={<LoginView/>}/>
                    <Route path='/movie' element={<MovieView/>}/>
                </Routes>
            </HashRouter>
        </>
    )
};

export {App}