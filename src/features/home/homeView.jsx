import './homeView.css'
import React from 'react';
import { HiOutlineUser, HiSearch, HiMenu } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useState} from 'react';
import { Card } from '../../core/components/card/card';
import { Carrousel } from '../../core/components/carrousel/carrousel';
//import { ApiTmdb} from '../../core/services/tmdb';


const HomeView = ()=>{

  const [timeWindow, setTimeWindow] = useState('day')


  
  

  function selectedTime(e){
   

    if (e.target.value==='day'){
      setTimeWindow('day')
    }else{
      setTimeWindow('week')
    }
   
  }

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

        <section className='carrousel_container'>
          <div className='carrousel_container_head'>
            <h2>Trending</h2>
            <div className='carrousel_container_head_buttons' >
              <button value={'day'} onClick={(e)=>selectedTime(e)}>Day</button> 
              <button value={'week'}onClick={(e)=>selectedTime(e)}>Week</button>
            </div>
            
          </div>
          
            
            <div className='cards_container'>
                <Carrousel tipe={'trending'} time={timeWindow}/>
                <div className='cards'></div>
                
            </div>
        </section>

        <section className='carrousel_container'>
          <h2>Upcoming</h2> 
            <div className='cards_container'>
                <Carrousel tipe={'upcoming'}/>
                <div className='cards'></div>
            </div>
        </section>

        <section className='carrousel_container'>
          <h2>En cartelera</h2> 
            <div className='cards_container'>
                <Carrousel tipe={'now_playing'}/>
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


export {HomeView};
