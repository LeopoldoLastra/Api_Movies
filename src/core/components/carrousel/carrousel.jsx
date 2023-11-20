import { Card } from '../card/card';
import { useTmdb } from '../../services/useTmdb';
import style from './carrusel.module.css'

const Carrousel = ({tipe, movieId, time})=>{

    const {information, error} = useTmdb({tipe, movieId, time});

    let sectionTitle = tipe.toUpperCase().replace('_', ' ');
    
   return(
    <>
        <h2>{sectionTitle}</h2>
        <div className={style.cardsContainer}>
        {information.map(e=>
                <Card
                    key={e.id}
                    id={e.id}
                    title={e.title}
                    img={e.poster_path}/> 
           
        )}
        </div>
    </>
    
    )
}

export {Carrousel} 