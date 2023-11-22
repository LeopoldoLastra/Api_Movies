import './discoverView.css'
import React, { useState } from 'react';
import Header from '../../core/components/header/header';
import { HiSearch } from 'react-icons/hi';
import { GenreList } from '../../core/components/genre/genreList';
import { List } from '../../core/components/list/list';


const DiscoverView = ()=>{

   const kindOfSearch = location.hash.split('/')[1]

    //Se utiliza movie de forma genérica (tanto para movies como para series)

    const [searchedMovie, setSearchedMovie] = useState('')
    const[selectedCategoryName, setSelectedCategoryName]= useState('Todas')
    
    const[selectedCategoryId, setSelectedCategoryId]= useState('all genres')

    const handlerSearchChange = (e)=>{
        
        setSearchedMovie(e.target.value)
    }

    const handlerGenderClick=(e)=>{
        setSearchedMovie('')
 
        setSelectedCategoryId(e.target.id)    
        setSelectedCategoryName(e.target.innerText)
    }

    return(
        <>
        <Header/>
        
        <section className='introduccion_container'>
          <h2>Las Mejores {kindOfSearch==='movie'? 'Peliculas' : 'Series'}</h2>
          <form name='search' className='searcher'>
            <label><HiSearch/></label>
            <input 
                type='text' 
                placeholder='buscar'
                onChange={handlerSearchChange} 
                className='searcher_box'
                value={searchedMovie}/>           
          </form>
        </section>


        <section> 
            <div onClick={(e)=>{handlerGenderClick(e)}}>
                <GenreList
                kindOfSearch={kindOfSearch}/>
            </div>        
        </section>

        <section>
            <h2>{selectedCategoryName}</h2>
            <div className='list_container'>
                <List
                    searchedMovie={searchedMovie}
                    selectedCategoryId={selectedCategoryId}
                    kindOfSearch={kindOfSearch}/>
            </div>
                     
        </section>
    
        </>
    )
}

export {DiscoverView}