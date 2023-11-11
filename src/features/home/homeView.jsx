import React from 'react';
import { HiOutlineUser, HiSearch, HiMenu } from "react-icons/hi";
import { Link } from 'react-router-dom';
import './homeView.css'



const HomeView = ()=>{
  return(
  <>
   <>
      <header className='header'>
        <nav className='header_left'><Link to='/'><HiMenu/></Link></nav>
        <div>Logo</div>
        <div className='header_right'><Link to='/login'><HiOutlineUser/></Link></div>
        
      </header>
      
      <main className='body'>
        
        <section className='introduccion_container'>
          <h2>¿Qué miramos hoy?</h2>
          <form name='search' className='searcher'>
            <label><HiSearch/></label>
            <input type='text' placeholder='buscar' className='searcher_box'/>
          </form>
        </section>

        <section className='trend_container'>
          <h2>Tendencias</h2>
          
          <div className='cards_container'>
            <Link to='/movie'>
                <div className='cards'>
                    <img />
                    <h3>Pelicula</h3>
                </div>
            </Link>
            <Link to='/movie'>
                <div className='cards'>
                    <img />
                    <h3>Pelicula</h3>
                </div>
            </Link>
            <Link to='/movie'>
                <div className='cards'>
                    <img />
                    <h3>Pelicula</h3>
                </div>
            </Link>
            <Link to='/movie'>
                <div className='cards'>
                    <img />
                    <h3>Pelicula</h3>
                </div>
            </Link>
           
          </div>
          


        </section>

        <section className='trend_container'>
          <h2>Últimos Estrenos</h2>
          
          <div className='cards_container'>
            <Link to='/movie'>
                    <div className='cards'>
                        <img />
                        <h3>Pelicula</h3>
                    </div>
                </Link>
                <Link to='/movie'>
                    <div className='cards'>
                        <img />
                        <h3>Pelicula</h3>
                    </div>
                </Link>
                <Link to='/movie'>
                    <div className='cards'>
                        <img />
                        <h3>Pelicula</h3>
                    </div>
                </Link>
                <Link to='/movie'>
                    <div className='cards'>
                        <img />
                        <h3>Pelicula</h3>
                    </div>
                </Link>
          </div>
        </section>

        <section className='trend_container'>
          <h2>Tendencias</h2>
            <div>
                <div className='cards_container'>
                    <Link to='/movie'>
                            <div className='cards'>
                                <img />
                                <h3>Pelicula</h3>
                            </div>
                        </Link>
                        <Link to='/movie'>
                            <div className='cards'>
                                <img />
                                <h3>Pelicula</h3>
                            </div>
                        </Link>
                        <Link to='/movie'>
                            <div className='cards'>
                                <img />
                                <h3>Pelicula</h3>
                            </div>
                        </Link>
                        <Link to='/movie'>
                            <div className='cards'>
                                <img />
                                <h3>Pelicula</h3>
                            </div>
                        </Link>
                </div>
            
            </div>
        </section>

      </main>

      <footer className='footer'>
        <ul>
          <li>Quienes Somos</li>
          <li>Contactanos</li>
        </ul>

      </footer>
    </>
  </>
    
)};


export {HomeView};
