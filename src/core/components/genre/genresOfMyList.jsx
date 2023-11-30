import './genreList.css';
import { useState } from 'react';



const GenresOfMyList = ({kindOfSearch, handlerGenre})=>{

   

    let savedGenres = (JSON.parse(localStorage.getItem('movieFavs'))).map(e=>e.genres)

    let flatSavedGenres = (savedGenres.flat()).map(item=>{return [item.id,item]})

    let setSavedGenres = new Map(flatSavedGenres)

    let singleSavedGenres =[...setSavedGenres.values()]
 
    
  
    return(
        <div className='genre_list_container'>
            <select  
                className='genre_list'
                name='categoria'
                onChange={(e)=>handlerGenre(e)}>
                <option id="all genres" name='all_genres' defaultValue='Todas'>Selecciona una categoria</option>
                {singleSavedGenres?.map(e =>(
                        <option
                            key={e.id}
                            id={e.id}   
                            value={e.name}> {e.name} </option>
                    ))
                }
            </select>
        </div>
    )
}

export {GenresOfMyList}