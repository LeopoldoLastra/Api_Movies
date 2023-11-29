import { useEffect, useState } from 'react'
import { MoviesContext } from './MoviesContext'


export default function MoviesProvider({children}) {
    const [favs, setFavs] = useState([])

    const saveStorage = (movie) => localStorage.setItem('movieFavs', JSON.stringify(movie))
    const loadStorage = () => localStorage.getItem('movieFavs')
    
    const isFav = (id) => favs && favs.filter(item => item.id == id)

    const handleFavs = (movie) => {
        let existeMovie = favs?.find(item => item.id == movie.id)
        if(!existeMovie){
            saveStorage([...favs, movie])
            setFavs([
                ...favs, movie
            ])
        }
        else{
            const newFavs = favs.filter(item => item.id != existeMovie.id)
            saveStorage(newFavs)
            setFavs(newFavs)
        }
    }
    
    useEffect(()=>{
        const data = loadStorage();
        if(data === null){
            setFavs([])
        }else{
            setFavs(JSON.parse(data))
        }
    },[])

    const [movieId, setMovieId]= useState(872585)
    const handleClick = (kindOfSearch,id) => {
        setMovieId(id)
        console.log(movieId)
        // console.log(kindOfSearch, id)
    }
    // ${location.pathname}/
    return(
        <MoviesContext.Provider
            value={{
                favs,
                handleFavs,
                isFav,
                movieId,
                setMovieId,
                handleClick
            }}>
            {children}
        </MoviesContext.Provider>
    )
}