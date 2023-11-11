import React from 'react';
import { HashRouter, Route, Routes} from 'react-router-dom';
import { Menu } from './core/components/menu';
import { HomeView } from './features/home/homeView';
import { LoginView } from './features/login/loginView';
import { MovieView } from './features/movie/movieView';

const App = ()=>{
    return(
        <>
            <HashRouter>
                <Menu/>
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