
import { HiOutlineUser, HiSearch, HiMenu } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { Carrousel } from '../../core/components/carrousel/carrousel';
import { useTmdb } from '../../core/services/useTmdb';
import { IoBookmarkOutline, IoBookmarkSharp ,IoShareSocialOutline } from 'react-icons/io5';
import { BiLike } from 'react-icons/bi';
import './movieView.css'
import Header from "../../core/components/header/header";
import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";


const MovieView = ()=>{

  const {handleFavs, isFav} = useContext(MoviesContext)

  const movieId = (location.hash.split('/'))[2]

  const {information, error}=useTmdb({movieId})

  const selectedMovie = { 
    id:information.id,
    title:information.title,
    img:information.poster_path,
    description:information.overview
  }
  const isFavMovie = isFav(movieId)
  


  const saveMovie = ()=>{
    handleFavs(selectedMovie)

    // const persistentMovieList =[]
 
    // if(!localStorage.getItem('Codo_Movie')){
    //   persistentMovieList.push(selectedMovie)
    //   localStorage.setItem(`Codo_Movie`,JSON.stringify(persistentMovieList))
    // }else{
    //   const oldMovieList = JSON.parse(localStorage.getItem('Codo_Movie'))
    //   oldMovieList.forEach((movie)=>{persistentMovieList.push(movie)})
    //   persistentMovieList.push(selectedMovie)
    //   const nueva = new Map([])
    //   persistentMovieList.forEach((e)=>{
    //     nueva.set(e.id, {id:e.id, title:e.title, img:e.img, overview:e.overview})
    //   })
    //   localStorage.setItem(`Codo_Movie`,JSON.stringify(persistentMovieList))

    // }
 
  }

  return(
  <>
   <>
      <Header/>
      <main className='body' >
        <img src={`https://image.tmdb.org/t/p/original${information.poster_path}`} width={300} height={300}/>
        <section className='body_action_bar' style={{position: 'relative'}}>
          <BiLike className='icon'/>
          <span 
            onClick={() => saveMovie()} 
            className="icon">
            {
              isFavMovie.length>0 && <IoBookmarkSharp/> || <IoBookmarkOutline/>
            }
          </span>
          <IoShareSocialOutline className='icon' />
        </section>
        <section className='description_container'>
            <div className='detail_container'>
              <h1>{information?.title}</h1>
              <p>{information?.overview}</p>
              <p>Reparto</p>
            </div>
        </section>
        <section className='carrousel_container'>
          <h2>Películas Relacionadas</h2> 
            <div className='cards_container'>
                <Carrousel tipe={'similar'} movieId={movieId}/>
                <div className='cards'></div>
                
            </div>
        </section>       
      </main>
      <footer className='footer'>
        <ul>
          <li>Quienes Somos</li>
          <li>Contactanos</li>
        </ul>
      </footer>
    </>
  </>
    
)};


export {MovieView};
