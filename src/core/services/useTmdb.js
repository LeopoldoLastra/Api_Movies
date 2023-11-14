import React from 'react';
import { useState, useEffect } from 'react';

const useTmdb= ({tipe, movieId, time})=>{



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
        if(tipe==='popular'){
            path='https://api.themoviedb.org/3/movie/popular'
        } else if(tipe === 'upcoming'){
            path='https://api.themoviedb.org/3/movie/upcoming'
        } 
        else if(tipe === 'now_playing'){
            path='https://api.themoviedb.org/3/movie/now_playing'
        } else if(tipe==='similar'){
       
            path=`https://api.themoviedb.org/3/movie/${movieId}/similar`
            
        }else if(tipe==='trending'){
            path=`https://api.themoviedb.org/3/trending/movie/${time}`
        }
        else {
            
            path=`https://api.themoviedb.org/3/movie/${movieId}`
        }
    } 

    selected_path()


    useEffect(()=>{
            
        const popularMovies = async()=>{
                 setIsLoading(false);
                 setError(null);
                try{
                    const response = await fetch(path, options);
                    const data = await response.json();
                    const addaptedData = adapter(data)
                    setInformation(addaptedData)
                   
    
                }catch(error){
                    setError(error);
                    }finally{
                    setIsLoading(true);
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