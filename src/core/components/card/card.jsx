import './card.css'
import React from 'react';
import { NavLink} from 'react-router-dom';
import { useContext } from 'react';
import { MoviesContext } from '../../../context/MoviesContext';

const Card = ({title, img, id, kindOfSearch})=>{
        
        const {handleClick}=useContext(MoviesContext)

        const newClick = (id) =>{
            // console.log(`${kindOfSearch}/${id}`)
            console.log(window.location.pathname.split('/')[1])
            handleClick(id)
        }

    return(
        <>
            <NavLink 
                // to={`/${kindOfSearch}/${id}`}
                >
                <div
                    className='cards'
                    onClick={()=>newClick(id)}
                    >
                        <img src={`https://image.tmdb.org/t/p/original${img}`}/>
                        <div className="card-info">{title}</div>
                        <p className='cards_title'> {title} </p>
                </div>
            </NavLink>
        </>
    )
}

export {Card}