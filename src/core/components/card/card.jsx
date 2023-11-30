import './card.css'
import React from 'react';
import { NavLink} from 'react-router-dom';
import { useContext } from 'react';
import { MoviesContext } from '../../../context/MoviesContext';



const Card = ({title, img, id, kindOfSearch})=>{
        
        const {handleClick}=useContext(MoviesContext)

        
    return(
        <>
            <NavLink 
                to={`/${kindOfSearch}/${id}`}
                >
                <div
                    className='cards'
                    onClick={()=>handleClick(kindOfSearch, id)}
                    >
                        <img src={img== null? 'https://images.pexels.com/photos/5662857/pexels-photo-5662857.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  :`https://image.tmdb.org/t/p/original${img}`}/>
                        <div className="card-info">{title}</div>
                        <p className='cards_title'> {title} </p>
                </div>
            </NavLink>
        </>
    )
}

export {Card}