import './discoverView.css'
import React, { useState } from 'react';
import Header from '../../core/components/header/header';
import { GenreList } from '../../core/components/genre/genreList';
import { List } from '../../core/components/list/list';
import { Footer } from '../../core/components/footer/footer';
import Search from '../../core/components/search/Search';
import { MyList } from '../../core/components/MyList/myList';
import { GenresOfMyList } from '../../core/components/genre/genresOfMyList';


const DiscoverView = ()=>{

   const kindOfSearch = window.location.pathname.split('/')[1]
   console.log('eeeeeeeeeee',kindOfSearch)

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
        const optionId = Math.floor( option.getAttribute('id'));
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
               { kindOfSearch!=='my-list' 
                    ? <GenreList
                        handlerGenre={handlerGenre}
                        kindOfSearch={kindOfSearch}/> 
                    : <GenresOfMyList 
                        handlerGenre={handlerGenre}
                        />
               }
            </div>
        </section>
        <section className='results_container'>
            <h3>{selectedCategory.name}</h3>
            <div className='list_container'>
                {kindOfSearch!=='my-list' ? <List
                    searchedMovie={searchedMovie}
                    selectedCategory={selectedCategory}
                    kindOfSearch={kindOfSearch}
                    />: <MyList
                    searchedMovie={searchedMovie}
                    selectedCategory={selectedCategory} />}
            
            </div>
        </section>
        <Footer />
        </>
    )
}

export default DiscoverView;