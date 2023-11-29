import { useState, useEffect } from 'react';

const useTmdb= ({type, movieId, time, genreId,kindOfSearch})=>{

    const [information, setInformation] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const adapter = (data)=>{
        if(!data.results){
            return(
                {   
                  id: data.id,
                  title: data.title || data.name,
                  poster: data.poster_path,
                  posterHori: data.backdrop_path,
                  genres: data.genres,
                  overview: data.overview,
                  vote: data.vote_average
                })
        }else{
            return(
              data.results.map(e=>({
                    id: e.id,
                    title: e.title || e.name,
                    poster: e.poster_path,
                    posterHori: data.backdrop_path,
                    genres: e.genre_ids,
                    overview: e.overview,
                    vote: e.vote_average
               })))
        }
    }
    const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `'Bearer ${import.meta.env.VITE_APP_API_TOKEN_AUTH_TMDB}`
          }
      };
    const URL = 'https://api.themoviedb.org/3';
    let path;
    function selected_path(){
        if(type==='popular'){
            path=`${URL}/movie/popular`
        }else if(type === 'upcoming'){
            path=`${URL}/movie/upcoming`
        }else if(type === 'now_playing'){
            path=`${URL}/movie/now_playing`
        }else if(type==='similar'){
            path=`${URL}/${kindOfSearch}/${movieId}/similar`   
        }else if(type==='trending'){
            path=`${URL}/trending/movie/${time}`
        }else if(type==='by_genre'){
            path=`${URL}/genre/${kindOfSearch}/list`
        }else if(type==='discover'){
            path=`${URL}/discover/${kindOfSearch}`
        }else if(type==='discover_by_genre'){
            path=`${URL}/discover/${kindOfSearch}?with_genres=${genreId}`
        }else {
            path=`${URL}/${kindOfSearch}/${movieId}`
        }
        return path
    } 
    selected_path()


    useEffect(()=>{
        const popularMovies = async () =>{
            setIsLoading(true);
            setError(null);
            try{
                const response = await fetch(path, options);
                const data = await response.json();
                const addaptedData = adapter(data)
                setInformation(addaptedData)
            }catch(error){
                setError(error);
            }finally{
                setIsLoading(false);
            }       
        }
        popularMovies();
    },[path])

    return{
        information,
        error,
        isLoading
    }
};

export {useTmdb}