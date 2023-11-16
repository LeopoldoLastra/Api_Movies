import './header.css';
import React, { useContext } from 'react';
import { HiOutlineUser, HiMenu } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MenuModal } from '../portal/menuModal';
import { MoviesContext } from '../../../context/MoviesContext';

const Header=()=>{

    const [openModal, setOpenModal]= useState(false)

    function showMenu(){
        if(openModal){
            setOpenModal(false)
        }else{
            setOpenModal(true)
        }
    }
    const {setState, state} = useContext(MoviesContext)

    return(

        <>
        <header className='header'>
            <nav className='header_left'><Link to='/'><HiMenu onClick={()=>{showMenu()}}/></Link></nav>
            <div>Logo</div>
            <div className='header_right'><Link to='/login'><HiOutlineUser/></Link></div>
            
        </header>
        {openModal && 
            <MenuModal>
                <ul>
                    <li>Mi Lista</li>
                    <li>Terror</li>
                    <li>Comedia</li>
                    <li>{state}</li>

                </ul>
            </MenuModal>
        }

        </>
        
    )
}


export{ Header}