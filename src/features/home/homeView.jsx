import './homeView.css'
import { useContext, useState} from 'react';
import { HiSearch } from "react-icons/hi";
import { Carrousel } from '../../core/components/carrousel/carrousel';
import Header from '../../core/components/header/header';
import Banner from '../../core/components/banner/Banner';
import Search from '../../core/components/search/Search';
import { MoviesContext } from '../../context/MoviesContext';
import SearchResults from '../../core/components/search/SearchResults';



const HomeView = ()=>{

  const [timeWindow, setTimeWindow] = useState('day')
  const {searched} = useContext(MoviesContext)

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
        <Search />
        {
          searched.length>0
          ? <SearchResults />
          : <Banner />
        }
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
      </main>
      <footer className='footer'>
        <ul>
          <li>Quienes Somos</li>
          <li>Contactanos</li>
        </ul>
      </footer>
  </>
    
)};


export {HomeView};
