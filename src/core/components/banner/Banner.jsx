import { useTmdb } from "../../services/useTmdb"
import { BiLike } from 'react-icons/bi';
import { AiFillHeart, AiOutlineHeart  } from 'react-icons/ai';
import { useState } from "react";

const Banner = () => {

    const tipe = 'now_playing'
    const movieId = null
    const time = null
    const {information, error} = useTmdb({tipe, movieId, time});
    const [clicked, setClicked] = useState(false)
  return (
    <swiper-container
        slides-per-view="1" 
        speed="500" 
        loop="true" 
        css-mode="true"
        navigation="true" 
        pagination="true" 
        scrollbar="true"
        style={{overflow:'hidden', marginTop:'5px'}}
        >
                {
                    information.slice(0,10).map(movie => (
                        
                            <swiper-slide 
                                key={movie.id}
                                style={{width: '100%', height:'400px', backgroundColor: '#121212', display:'flex', justifyContent: 'flex-end'}}
                                >   
                                    <div
                                        style={{
                                            color: '#ddd',
                                            width:'300px',
                                            textAlign: 'center',
                                            display:'flex',
                                            flexDirection: 'column',
                                            justifyContent:'space-around',
                                            padding:'0 20px'
                                        }}>
                                            <h2
                                                style={{fontSize:'40px', height:'70%'}}>{movie.original_title}</h2>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    justifyContent:'space-between'
                                                }}>
                                                <span
                                                    style={{
                                                        borderRadius:'50%',
                                                        border:'1px solid #ddd',
                                                        width:50,
                                                        height:50,
                                                        display:'flex',
                                                        alignItems:'center',
                                                        justifyContent:'center'
                                                    }}
                                                    onClick={()=>setClicked(!clicked)}>
                                                        {
                                                            clicked && <AiFillHeart size={30}/> || <AiOutlineHeart size={30}/>
                                                        }
                                                    </span>
                                                <span></span>
                                            </div>
                                    </div>
                                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.original_title} style={{objectFit:'cover', width:'80%', height:'100%'}}/>
                            </swiper-slide>
                     
                    ))
                }
    </swiper-container>
  )
}

export default Banner