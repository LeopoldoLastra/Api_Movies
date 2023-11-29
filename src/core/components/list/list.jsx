import './list.css'
import React, { useState } from 'react';
import { useTmdb } from '../../services/useTmdb';
import { ListSkeleton } from '../loadingSkeleton/listSkeleton/listSkeleton';
import { MoviesContext } from '../../../context/MoviesContext';
import { useContext } from 'react';
import { Card } from '../card/card';

const List = ({searchedMovie, kindOfSearch, selectedCategory})=>{

//Filtro por genero

    let pathSelection 
    let genreSelection 
    const{id, name} = selectedCategory

    if(id!=='all genres'){
        pathSelection = 'discover_by_genre'
        genreSelection = id  
    }else{
        pathSelection ='discover'
        genreSelection = 'all_genres'
    }

    const {information, error, isLoading}= useTmdb ({type:pathSelection, genreId:genreSelection, kindOfSearch:kindOfSearch})
    
//Filtro por búsqueda
    let list;
    if(searchedMovie !== ''){
        list = information.filter(movie=> (movie.title.toLowerCase()).includes((`${searchedMovie}`).toLowerCase()))   
    }else{
        list = information
    }
    const {setMovieId}=useContext(MoviesContext)
    // const handleOnClick = (id)=>{
    //     setMovieId(id)
    // }
    return(
        <>
            {
                isLoading 
                    ? <ListSkeleton/> 
                    : ( list &&
                            list?.map( movie => (
                                <Card
                                    key={movie.id}
                                    // onClick={()=>handleOnClick(movie.id)}
                                    title={movie.title}
                                    id={movie.id}
                                    img={movie.poster}
                                    kindOfSearch={kindOfSearch}
                                    className='list_content'/>
                                    ))
                            ||   null)
            }
        </>
    )
}

export {List}