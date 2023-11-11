import React from 'react';
import { HiOutlineUser, HiSearch, HiMenu } from "react-icons/hi";
import { Link } from 'react-router-dom';
import './movieView.css'



const MovieView = ()=>{
  return(
  <>
   <>
      <header className='header'>
        <nav className='header_left'><HiMenu/></nav>
        <div>Logo</div>
        <div className='header_right'><Link to='/login'><HiOutlineUser/></Link></div>
        
      </header>
      
      <main className='body'>
        
        <section className='description_container'>
            <img/>
            <h1>Título Película</h1>
            <p>Descripción</p>
            <p>Categoría</p>
            <p>Reparto</p>
        </section>

        <section className='trend_container'>
          <h2>Películas Relacionadas</h2>
          
          <div className='cards_container'>
            <div className='cards'>
              <img />
              <h3>Pelicula</h3>
            </div>
            <div className='cards'>
              <img />
              <h3>Pelicula</h3>
            </div>
            <div className='cards'>
              <img />
              <h3>Pelicula</h3>
            </div>
            <div className='cards'>
              <img />
              <h3>Pelicula</h3>
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


export {MovieView};
