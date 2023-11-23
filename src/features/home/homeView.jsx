import './homeView.css'
import { useState} from 'react';
import { HiSearch } from "react-icons/hi";
import { Carrousel } from '../../core/components/carrousel/carrousel';
import Header from '../../core/components/header/header';
import { Footer } from '../../core/components/footer/footer';



const HomeView = ()=>{

  const [timeWindow, setTimeWindow] = useState('day')

  function selectedTime(e){

    if (e.target.value==='day'){setTimeWindow('day')
    }else{setTimeWindow('week')
    }
  }

  return(
  <>
      <Header/>
      <main className='body'>
        <section className='carrousel_container'>
          <div className='carrousel_container_head'>
            <h2>Trending</h2>
            <div className='carrousel_container_head_buttons' >
              <button value={'day'} onClick={(e)=>selectedTime(e)}>Day</button> 
              <button value={'week'}onClick={(e)=>selectedTime(e)}>Week</button>
            </div>
          </div>
            <div className='cards_container'>
                <Carrousel type={'trending'} time={timeWindow}/>
                <div className='cards'></div>
            </div>
        </section>
        <section className='carrousel_container'>
          <h2>Upcoming</h2> 
            <div className='cards_container'>
                <Carrousel type={'upcoming'}/>
                <div className='cards'></div>
            </div>
        </section>
        <section className='carrousel_container'>
          <h2>En cartelera</h2> 
            <div className='cards_container'>
                <Carrousel type={'now_playing'}/>
                <div className='cards'></div>
            </div>
        </section>
      </main>
      <Footer />
  </>
    
)};


export {HomeView};
