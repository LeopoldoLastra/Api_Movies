
import { Carrousel } from '../../core/components/carrousel/carrousel';
import { useTmdb } from '../../core/services/useTmdb';
import { IoBookmarkOutline, IoBookmarkSharp ,IoShareSocialOutline } from 'react-icons/io5';
import { BiLike, BiSolidLike} from 'react-icons/bi';
import './detailView.css'
import Header from '../../core/components/header/header';
import { useContext, useState } from 'react';
import { MoviesContext } from '../../context/MoviesContext';
import { Footer } from '../../core/components/footer/footer';


const DetailView = ()=>{

  const {handleFavs, isFav, movieId} = useContext(MoviesContext)
  const [likeMovie, setLikeMovie] = useState('');

  const locationPathName = ((location.pathname.split('/')))

  
  const {information, error}=useTmdb({movieId,kindOfSearch:(locationPathName[1]) })

  
  const selectedMovie = { 
    id:information.id,
    title:information.title,
    poster:information.poster,
    description:information.overview,
    kindOfSearch:locationPathName[1],
    genres:information.genres
  }
  const isFavMovie = isFav(movieId)
  
  const saveMovie = ()=>{
    handleFavs(selectedMovie)
  }

  const handleLike = ()=>{

    if(likeMovie == 'like'){
      setLikeMovie( '')
    }
    else{
      setLikeMovie( 'like')
    }
   
  }

  return(
  <>
      <Header/>
      <main className='body' >
          <div className='detail_main_container'>
            <img 
              className='detail_img' 

             
              src={information.poster == null ? 'https://images.pexels.com/photos/5662857/pexels-photo-5662857.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1': `https://image.tmdb.org/t/p/original${information.poster}`} 
              />
            <div className='container-bar-info'>
              <section className='body_action_bar' >

               

                <span 
                  onClick={() => handleLike()} 
                  className='icon'>
                  {
                    likeMovie =='like' ?  <BiSolidLike className='icon'/> : <BiLike className='icon'/> 
                  }
                </span>




                <span 
                  onClick={() => saveMovie()} 
                  className='icon'>
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
                </div>
              </section>
            </div>    
          </div>
          <section className='relacionadas'>
            <h2>{locationPathName[1]==='movie'? 'Peliculas' : 'Series'} Relacionadas</h2>  
            <Carrousel type={'similar'} movieId={movieId} kindOfSearch={locationPathName[1]}/>
              
          </section>          
      </main>
      <Footer />
  </>
)};

export default DetailView;
