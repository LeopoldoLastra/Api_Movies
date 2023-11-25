import { HashRouter, Route, Routes} from 'react-router-dom';
import { register } from 'swiper/element/bundle';
import MoviesProvider from './context/MoviesProvider';
import { lazy } from 'react';
import { Suspense } from 'react';
import Spinner from './core/components/spinner/spinner';


register()

const App = ()=>{


    const HomeView = lazy(()=>import('./features/home/homeView'))
    const LoginView = lazy(()=>import('./features/login/loginView'))
    const DetailView = lazy(()=>import('./features/detailView/detailView'))
    const DiscoverView = lazy(()=>import('./features/discoverView/discoverView'))
    

    return(
        <MoviesProvider>
            <HashRouter>
               <Suspense fallback={<Spinner/>}>

                    <Routes>
                        <Route path='/' element={<HomeView/>}/>
                        <Route path='/login' element={<LoginView/>}/>
                        <Route path='/movie/:slug' element={<DetailView/>}/>
                        <Route path='/tv/:slug' element={<DetailView/>}/>
                        <Route path='/movie' element={<DiscoverView/>}/>
                        <Route path='/tv' element={<DiscoverView/>}/>

                    </Routes>
                </Suspense>
            </HashRouter>
        </MoviesProvider>
    )
};

export {App}