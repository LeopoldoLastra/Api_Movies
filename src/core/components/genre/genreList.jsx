import './genreList.css';
import { useState } from 'react';
import { useTmdb } from '../../services/useTmdb';


const GenreList = ({kindOfSearch, handlerGenre})=>{

    const {information, error}= useTmdb ({type:'by_genre', kindOfSearch:kindOfSearch})
    
    return(
        <div className='genre_list_container'>
            <select  
                className='genre_list'
                name='categoria'
                onChange={(e)=>handlerGenre(e)}>
                <option id="all genres" name='all_genres'>Todos los géneros</option>
                
                {
                    information?.genres?.map(genre =>(
                        <option
                            key={genre.id}
                            id={genre.id}   
                            value={genre.name}>
                                {genre.name}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export {GenreList}

