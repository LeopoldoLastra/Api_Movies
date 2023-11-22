import { Card } from '../card/card';
import { useTmdb } from '../../services/useTmdb';
import style from './carrusel.module.css'

const Carrousel = ({type, movieId, time, kindOfSearch})=>{

    const {information, error} = useTmdb({type, movieId, time, kindOfSearch});

    
   return(
        <div className={style.cardsContainer}>
        {information.map(e=>
                <Card
                    key={e.id}
                    id={e.id}
                    title={e.title}
                    img={e.poster_path}/> 
           
        )}
        </div>
    
    )
}

export {Carrousel} 