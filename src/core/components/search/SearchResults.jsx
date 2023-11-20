import React, { useContext, useEffect, useState } from 'react'
import { MoviesContext } from '../../../context/MoviesContext'

const SearchResults = () => {
    const [movies, setMovies] = useState([])

    const {searched} = useContext(MoviesContext)
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `'Bearer ${import.meta.env.VITE_APP_API_TOKEN_AUTH_TMDB}`
        }
    }
    
    let movieSearched =''
    if(searched.includes(' ')){
        movieSearched = searched.replace(' ', '%20')
    }else{
        movieSearched = searched
    }
    const url = `https://api.themoviedb.org/3/search/movie?query=${movieSearched}&include_adult=false&language=es-mx&page=1`
    
    const results = async() =>{
        const response = await fetch(url, options)
        const data = await response.json()
        setMovies(data.results)
    }
    
    useEffect(()=>{
        results()
        console.log(movies)
    },[searched])

  return (
    <div>
        {
            movies.length > 0 &&
            movies.map((movie)=>(
                <div
                    key={movie.id}>
                    <h2>{movie.original_title}</h2>
                </div>
            ))
        }
    </div>
  )
}

export default SearchResults