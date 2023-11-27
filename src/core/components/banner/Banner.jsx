import { AiFillHeart, AiOutlineHeart, AiOutlinePlayCircle, AiOutlinePlaySquare, AiFillPlayCircle  } from 'react-icons/ai';
import { useState } from "react";
import { useGetData } from "./getData";
import {useBannerStyles} from "./bannerStyles"
import { Navigation, Pagination, Scrollbar} from 'swiper/modules'
import 'swiper/css/bundle'
import { BannerSkeleton } from '../loadingSkeleton/bannerSkeleton/bannerSkeleton';


const Banner = () => {
    
    const {info, loaded} = useGetData()    
    const [likeds, setLikeds] = useState([])
    const handleLikeds = (title) =>{
        const isLiked = likeds.find(item => item == title)
        if(!isLiked){
            setLikeds([
                ...likeds, title
            ])
        }else{
            const newLikeds = likeds.filter(item=> item != title)
            setLikeds(newLikeds)
        }
    }
    const {stylesSlide, stylesTitle, stylesSwiper, stylesInfoContainer, stylesImg} = useBannerStyles()
    
  return (
<>
    { !loaded ? <BannerSkeleton/> :  
        <swiper-container
            modules={[Navigation, Pagination, Scrollbar]}
            slides-per-view="1"
            controller='true'
            navigation='true'
            speed='500'
            css-mode="true"
            style={stylesSwiper}>
                    {
                        loaded && 
                        info.slice(0,20).map(movie => (
                            
                                <swiper-slide
                                    key={movie.id}
                                    lazy='true'
                                    style={stylesSlide}>   
                                        <div
                                            style={stylesInfoContainer}>
                                                <h2 style={stylesTitle}>{movie.original_title}</h2>
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent:'space-around',
                                                        alignItems: 'center'
                                                    }}>
                                                    {
                                                        window.innerWidth > 768 && (
                                                        <>
                                                            <span
                                                                onClick={()=>handleLikeds(movie.original_title)}>
                                                                {
                                                                    likeds.includes(movie.original_title)
                                                                    ? <AiFillHeart size={40}/>
                                                                    : <AiOutlineHeart size={40}/>
                                                                }
                                                            </span>
                                                            <span><AiFillPlayCircle size={40}/></span>
                                                        </>)
                                                    }
                                                    
                                                </div>
                                        </div>
                                        <img 
                                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.original_title} style={stylesImg}/>
                                </swiper-slide>
                        ))
                    }
        </swiper-container>
    }
</>         
  )
}

export default Banner