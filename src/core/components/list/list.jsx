import './list.css'
import React, { useState } from 'react';
import { useTmdb } from '../../services/useTmdb';
import { NavLink } from 'react-router-dom';

const List = ({searchedMovie, selectedCategoryName, kindOfSearch, selectedCategory})=>{

//Filtro por genero

    let pathSelection ='discover'
    let genreSelection = 'all_genres'
    const{id, name} = selectedCategory
    if(id!=='all genres'){
        pathSelection = 'discover_by_genre'
        genreSelection = id  
    }
    console.log(genreSelection)
    const {information, error}= useTmdb ({type:pathSelection, genreId:genreSelection, kindOfSearch:kindOfSearch})

//Filtro por búsqueda

    let list = information

    if(searchedMovie !== ''){
        
        list = information.filter(movie=> (movie.title.toLowerCase()).includes((`${searchedMovie}`).toLowerCase()))

    }

    return(
        <>
          {list.map((movie)=>{return(
                
                    <div key={movie.id}>
                        <NavLink to={`/${kindOfSearch}/${movie.id}` } >
                            <div className='list_content' >
                                <img src={`https://image.tmdb.org/t/p/original${movie.poster}`}/>
                                <p>{ movie.title }</p>
                            </div>
                        </NavLink>

                    </div>    
                
            )})}
                
            

        </>
    )
}

export {List}