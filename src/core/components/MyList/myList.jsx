import './myList.css'


import { NavLink } from 'react-router-dom';

import { MoviesContext } from '../../../context/MoviesContext';
import { useContext } from 'react';

const MyList = ({searchedMovie, selectedCategory})=>{

   const {setMovieId, loadStorage}=useContext(MoviesContext)

   let savedTvMovies = JSON.parse(localStorage.getItem('movieFavs'))

   if(selectedCategory.id!=='all genres'){
    
    savedTvMovies = savedTvMovies.filter(movie=> (movie.genres.some(e=>e.id == selectedCategory.id)))
  
    
    console.log('Peliculas Filtradas ',savedTvMovies)
    
    
   }

   if(searchedMovie!=='' && savedTvMovies){
    savedTvMovies = savedTvMovies.filter(movie=> (movie.title.toLowerCase()).includes((`${searchedMovie}`).toLowerCase()))

}    

    const handleOnClick = (id)=>{
        setMovieId(id)

      
    }
    return(
        <>
          {!savedTvMovies ? <p>No tenés películas guardadas</p> :
          
          savedTvMovies.map((movie)=>{return(
                
                    <div key={movie.id} id={movie.id} onClick={()=>{handleOnClick(movie.id)}}>
                        <NavLink to={`/${movie.kindOfSearch}/${movie.id}` } >
                            <div className='my_list_content' >
                                <img src={`https://image.tmdb.org/t/p/original${movie.poster}`}/>
                                <p>{ movie.title }</p>
                            </div>
                        </NavLink>

                    </div>    
                
            )})}
                
            

        </>
    )
}

export {MyList}