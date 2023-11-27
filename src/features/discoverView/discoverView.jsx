import './discoverView.css'
import React, { useState } from 'react';
import Header from '../../core/components/header/header';
import { HiSearch } from 'react-icons/hi';
import { GenreList } from '../../core/components/genre/genreList';
import { List } from '../../core/components/list/list';
import { Footer } from '../../core/components/footer/footer';
import Search from '../../core/components/search/Search';


const DiscoverView = ()=>{

   const kindOfSearch = location.hash.split('/')[1]

    //Se utiliza movie de forma genérica (tanto para movies como para series)
    
    const [searchedMovie, setSearchedMovie] = useState('')
    const [selectedCategory, setSelectedCategory] = useState({
        id:'all genres',
        name:'Todas'
    })
    
    const handlerSearchChange = (e)=>{
        setSearchedMovie(e.target.value)
    }

    const handlerGenre=(e)=>{
        const index = e.target.selectedIndex;
        const option = e.target.childNodes[index]
        const optionId =  option.getAttribute('id');
        setSearchedMovie('')
        setSelectedCategory({
            id:optionId,
            name:e.target.value
        })
    }

    return(
        <>
        <Header/>
        <section className='intro_container'>
            <h2>Las Mejores {kindOfSearch==='movie'? 'Peliculas' : 'Series'}</h2>
            <div className="search-categoria">
                <Search 
                    handlerSearchChange={handlerSearchChange}
                    searchedMovie={searchedMovie
                    }/>
                <GenreList
                    handlerGenre={handlerGenre}
                    kindOfSearch={kindOfSearch}/>
            </div>
        </section>
        <section className='results_container'>
            <h3>{selectedCategory.name}</h3>
            <div className='list_container'>
                <List
                    searchedMovie={searchedMovie}
                    selectedCategory={selectedCategory}
                    kindOfSearch={kindOfSearch}
                    />
            
            </div>
        </section>
        <Footer />
        </>
    )
}

export default DiscoverView;