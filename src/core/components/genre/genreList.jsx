import './genreList.css';
import React from 'react';
import { useTmdb } from '../../services/useTmdb';


const GenreList = ({kindOfSearch})=>{

    const {information, error}= useTmdb ({type:'by_genre', kindOfSearch:kindOfSearch})


    return(
        <>
        <div className='genre_list_container'>
            <h2>Categorias</h2>
            <ul className='genre_list'>
                {information?.genres?.map((genre)=>{
                        return(
                           <li key={genre.id} id={genre.id} >{genre.name}</li>  
                        )
                    })}
            </ul>
        </div>
        </>
    )
}

export {GenreList}