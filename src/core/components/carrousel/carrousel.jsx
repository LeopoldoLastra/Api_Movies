import { Card } from '../card/card';
import { useTmdb } from '../../services/useTmdb';
import style from './carrusel.module.css'
import { CardSkeleton } from '../loadingSkeleton/cardSkeleton/cardSkeleton';

const Carrousel = ({type, movieId, time, kindOfSearch})=>{

    const {information, isLoading, error} = useTmdb({type, movieId, time, kindOfSearch});

    let sectionTitle = type.toUpperCase().replace('_', ' ');


    
   return(
    <>
        <h2 className={style.carrouselTitle}>{sectionTitle}</h2>
        <div className={style.cardsContainer}>

        {isLoading ? <CardSkeleton/>


        :information?.map(e=>
                <Card
                    key={e.id}
                    id={e.id}
                    title={e.title}
                    img={e.poster}
                    kindOfSearch={kindOfSearch}

                    /> 
           
        )}
        </div>
    </>
    
    )
}

export {Carrousel} 