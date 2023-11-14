
import { HiOutlineUser, HiSearch, HiMenu } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { Carrousel } from '../../core/components/carrousel/carrousel';
import { useTmdb } from '../../core/services/useTmdb';


import './movieView.css'


const MovieView = ()=>{

  const movieId = (location.hash.split('/'))[2]

  const {information, error}=useTmdb({movieId})



  const saveMovie = (e)=>{

    const selectedMovie ={
      id:information.id,
      title:information. title,
      img:information.poster_path,
      description:information.overview
    }

    
      
      const movieList=[]

      if(!JSON.parse(localStorage.getItem('Codo_Movie'))){
        localStorage.setItem('Codo_Movie',JSON.stringify(selectedMovie))
      }else{
        movieList.push( JSON.parse(localStorage.getItem('Codo_Movie')))
        console.log ('vieja lista', movieList)
        movieList.push(selectedMovie)
        localStorage.setItem('Codo_Movie',JSON.stringify(movieList))

        console.log ('nueva lista', movieList)
      }

    

   
   

   
    
  }

  return(
  <>
   <>
      <header className='header'>
        <nav className='header_left'><Link to='/'><HiMenu/></Link></nav>
        <div>Logo</div>
        <div className='header_right'><Link to='/login'><HiOutlineUser/></Link></div>
        
      </header>
      
      <main className='body'>
      <img src={`https://image.tmdb.org/t/p/original${information.poster_path}`}/>

        <section className='description_container'>
          
            <div className='detail_container'>
              <h1>{information?.title}</h1>
              <p>{information?.overview}</p>
              <p>Reparto</p>
            </div>

            <button value={information.id} onClick={()=>{saveMovie()}}>Add</button>
            

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
