import React from 'react';
import { useState, useEffect } from 'react';

const useTmdb= ({type, movieId, time, genreId,kindOfSearch})=>{



    const [information, setInformation] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const adapter = (data)=>{
        if(!data.results){
            return(data)
        }else{
            return(data.results)
        }
    }


    const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `'Bearer ${import.meta.env.VITE_APP_API_TOKEN_AUTH_TMDB}`
            }
        };

  
    
let path
   
    function selected_path(){
        if(type==='popular'){
            path='https://api.themoviedb.org/3/movie/popular'

        } else if(type === 'upcoming'){
            path='https://api.themoviedb.org/3/movie/upcoming'
        } 
        else if(type === 'now_playing'){
            path='https://api.themoviedb.org/3/movie/now_playing'

        } else if(type==='similar'){
            path=`https://api.themoviedb.org/3/${kindOfSearch}/${movieId}/similar`
            
        }else if(type==='trending'){
            path=`https://api.themoviedb.org/3/trending/movie/${time}`

        }else if(type==='by_genre'){
            path=`https://api.themoviedb.org/3/genre/${kindOfSearch}/list`
       

        }else if(type==='discover'){
            path=`https://api.themoviedb.org/3/discover/${kindOfSearch}`

        }else if(type==='discover_by_genre'){
            path=`https://api.themoviedb.org/3/discover/${kindOfSearch}?with_genres=${genreId}`
        }
        else {
            path=`https://api.themoviedb.org/3/${kindOfSearch}/${movieId}`
        }
    } 

    selected_path()


    useEffect(()=>{
            
        const popularMovies = async()=>{
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
        error
    }
};

export {useTmdb}