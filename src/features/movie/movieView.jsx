
import { HiOutlineUser, HiSearch, HiMenu } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { Carrousel } from '../../core/components/carrousel/carrousel';
import { useTmdb } from '../../core/services/useTmdb';

import './movieView.css'

const MovieView = ()=>{

  const movieId = (location.hash.split('/'))[2]

  const {information, error}=useTmdb({movieId})

  console.log(information)
  return(
  <>
   <>
      <header className='header'>
        <nav className='header_left'><Link to='/'><HiMenu/></Link></nav>
        <div>Logo</div>
        <div className='header_right'><Link to='/login'><HiOutlineUser/></Link></div>
        
      </header>
      
      <main className='body'>
        
        <section className='description_container'>
            <img src={`https://image.tmdb.org/t/p/original${information.poster_path}`}/>
            <div className='detail_container'>
              <h1>{information?.title}</h1>
              <p>{information?.overview}</p>
              <p>Reparto</p>
            </div>
            

        </section>

        <section className='carrousel_container'>
          <h2>Películas Relacionadas</h2> 
            <div className='cards_container'>
                <Carrousel tipe={'similar'} movieId={movieId}/>
                <div className='cards'></div>
                
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
