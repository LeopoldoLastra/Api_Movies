import React, { useContext, useEffect, useState } from 'react'
import { MoviesContext } from '../../../context/MoviesContext'
import { Card } from '../card/card'
import style from '../carrousel/carrusel.module.css'
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
    if(searched?.includes(' ')){
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
    },[searched])

  return (
    <section className='carrousel_container'>
        <div className={style.cardsContainer}>
            {
                movies.length > 0 &&
                movies.map((movie)=>(
                    <Card
                        className='cards'
                        key={movie.id}
                        title={movie.title}
                        img={movie.poster_path}
                        >
                    </Card>
                ))
            }
        </div>
    </section>
  )
}

export default SearchResults