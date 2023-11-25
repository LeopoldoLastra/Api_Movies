import './homeView.css'
import { useState} from 'react';
import { Carrousel } from '../../core/components/carrousel/carrousel';
import Header from '../../core/components/header/header';
import Banner from '../../core/components/banner/Banner';
import { Footer } from '../../core/components/footer/footer';

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
      <Header/>

      <Banner />

      <main className='body'>
        <section className='carrousel_container'>
          <div className='carrousel_container_head'>
            <div className='carrousel_container_head_buttons' >
              <button value={'day'} onClick={(e)=>selectedTime(e)}>Day</button> 
              <button value={'week'}onClick={(e)=>selectedTime(e)}>Week</button>
            </div>
          </div>
        </section>
        
        <Carrousel type={'trending'} time={timeWindow} kindOfSearch={'movie'} />    
        <Carrousel type={'upcoming'} kindOfSearch={'movie'}/>
        <Carrousel type={'now_playing'} kindOfSearch={'movie'}/>    
      </main>  
      <Footer />
  </>
    
)};


export {HomeView};
