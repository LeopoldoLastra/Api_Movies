import './homeView.css'
import { useContext, useState} from 'react';
import { Carrousel } from '../../core/components/carrousel/carrousel';
import Header from '../../core/components/header/header';
import Banner from '../../core/components/banner/Banner';
import { MoviesContext } from '../../context/MoviesContext';
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
      <main className='body'>
        <Banner />
        <section className='carrousel_container'>
          <div className='carrousel_container_head'>
            <div className='carrousel_container_head_buttons' >
              <button value={'day'} onClick={(e)=>selectedTime(e)}>Day</button> 
              <button value={'week'}onClick={(e)=>selectedTime(e)}>Week</button>
            </div>
          </div>
          <section className='carrousel_container'>
                <Carrousel tipe={'trending'} time={timeWindow}/>
          </section>
        </section>
        <section className='carrousel_container'> 
                <Carrousel tipe={'upcoming'}/>
        </section>
        <section className='carrousel_container'>
                <Carrousel tipe={'now_playing'}/>
        </section>
      
        <section className='carrousel_container'>
          <h2>Upcoming</h2> 
            <div className='cards_container'>
                <Carrousel type={'upcoming'}/>
                <div className='cards'></div>
            </div>
        </section>
      </main>  
      <Footer />
  </>
    
)};


export {HomeView};
