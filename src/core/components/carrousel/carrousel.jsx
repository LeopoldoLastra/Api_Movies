import React from 'react';
import { Card } from '../card/card';
import { useTmdb } from '../../services/useTmdb';

const Carrousel = ({tipe, movieId, time})=>{

    const {information, error} = useTmdb({tipe, movieId, time});

    
   return(
        <>
        {information.map(e=>
                <Card
                key={e.id}
                id={e.id}
                title={e.title}
                img={e.poster_path}/>
           
        )}
        </>
    
    )
}

export {Carrousel} 