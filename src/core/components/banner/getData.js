import { useEffect, useState } from "react";

export const useGetData = () =>{
    const [loaded, setLoaded] = useState(false)
    const [info, setInfo] = useState([])
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `'Bearer ${import.meta.env.VITE_APP_API_TOKEN_AUTH_TMDB}`
        }
    };
    const adapter = (data)=>{
        if(!data.results){
            return(data)
        }else{
            return(data.results)
        }
    }
    const url = 'https://api.themoviedb.org/3/movie/now_playing'

    const getMovieData = async () =>{
        setLoaded(false)
        try {
            const response = await fetch(url, options)
            const data = await response.json()
            const adappted = adapter(data)
            setInfo(adappted)
        } catch (error) {
            console.log(error.message)
        }finally{
            setLoaded(true)
        }
    }
    useEffect(()=>{
        getMovieData()
    },[])

    return {info, loaded}
}
