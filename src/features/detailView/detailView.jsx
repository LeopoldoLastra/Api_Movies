
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
    posterHori: information.posterHori,
    description:information.overview,
    kindOfSearch:locationPathName[1],
    genres:information.genres
  }
  const isFavMovie = isFav(movieId)
  
  const saveMovie = ()=>{
    handleFavs(selectedMovie)
  }
  return(
  <>
      <Header/>
      <main className='body' >
          <div className='detail_main_container'>
            <figure className='detail_data_container'>
              <picture>
                <source media="(max-width:600px )" srcSet={`https://image.tmdb.org/t/p/original${information.poster}`} />
                <img 
                  className='detail_img' 
                  src={`https://image.tmdb.org/t/p/original${information.posterHori}`}
                  loading="lazy" 
                  decoding="async"/>
              </picture>
                <div className="detail_img_overlay"></div>
                <figcaption className='detail_info'>
                  <h1>{information?.title}</h1>
                  <p>{information?.overview}</p>
                </figcaption>
            </figure>
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
