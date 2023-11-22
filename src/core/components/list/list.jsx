import './list.css'
import React, { useState } from 'react';
import { useTmdb } from '../../services/useTmdb';
import { NavLink } from 'react-router-dom';

const List = ({searchedMovie, selectedCategoryId, kindOfSearch})=>{

//Filtro por genero

    let pathSelection ='discover'
    let genreSelection = 'all_genres'

    if(selectedCategoryId!=='all genres'){
        pathSelection = 'discover_by_genre'
        genreSelection = selectedCategoryId  
    }

    const {information, error}= useTmdb ({type:pathSelection, genreId:genreSelection, kindOfSearch:kindOfSearch})

//Filtro por búsqueda

    let list = information

    if(searchedMovie !== '' && kindOfSearch ==='movie'){
        
        list = information.filter(movie=> (movie.title.toLowerCase()).includes((`${searchedMovie}`).toLowerCase()))

    }else if(searchedMovie !== '' && kindOfSearch ==='tv'){

        list = information.filter(movie=> (movie.name.toLowerCase()).includes((`${searchedMovie}`).toLowerCase()))
    }

    return(
        <>
          {list.map((movie)=>{return(
                
                    <div key={movie.id}>
                        <NavLink to={`/${kindOfSearch}/${movie.id}` } >
                            <div className='list_content' >
                                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
                                <p>{ kindOfSearch ==='movie'? movie.title : movie.name }</p>
                            </div>
                        </NavLink>

                    </div>    
                
            )})}
                
            

        </>
    )
}

export {List}