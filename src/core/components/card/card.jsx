import './card.css'
import React from 'react';
import { NavLink} from 'react-router-dom';

const Card = ({ title, img, id})=>{



    return(
        <>
            <NavLink to={`/movie/${id}`}
            >
                <div onClick={()=>{}} className='cards'>
                    <img src={`https://image.tmdb.org/t/p/original${img}`}/>
                    <p className='cards_title'>{title}</p>
                </div>
            </NavLink>
        </>
    )
}

export {Card}