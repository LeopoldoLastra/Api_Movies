import './card.css'
import React from 'react';
import { NavLink} from 'react-router-dom';
import { useContext } from 'react';
import { MoviesContext } from '../../../context/MoviesContext';

const Card = ({title, img, id, kindOfSearch})=>{

        
        const {setMovieId}=useContext(MoviesContext)


        const handleOnClick = ()=>{
            setMovieId(id)
    
          
        }

       

    return(
        <>
            <NavLink to={`/${kindOfSearch}/${id}`}
            >
                <div
                    className='cards'
                    onClick={()=>{handleOnClick()}}
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