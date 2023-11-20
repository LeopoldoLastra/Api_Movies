import { useEffect, useState } from 'react'
import { MoviesContext } from './MoviesContext'


export default function MoviesProvider({children}) {
    const [favs, setFavs] = useState([])
    const [searched, setSearched] = useState('')

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

    const handleSearch = (e) =>{
        e.preventDefault();
        const data = new FormData(e.target)
        const movieSearched = data.get('movie')
        setSearched(movieSearched)
    }
    
    useEffect(()=>{
        const data = loadStorage();
        if(data === null){
            setFavs([])
        }else{
            setFavs(JSON.parse(data))
        }
    },[])

    
    return(
        <MoviesContext.Provider
            value={{
                favs,
                handleFavs,
                isFav,
                searched,
                setSearched,
                handleSearch
            }}>
            {children}
        </MoviesContext.Provider>
    )
}