import style from './header.module.css';
import React, { useContext, useEffect } from 'react';
import { HiOutlineUser, HiMenu } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MoviesContext } from '../../../context/MoviesContext';
import Menu from '../menuPortal/menu';
import ItemsMenu from '../menuPortal/ItemsMenu';
import Navbar from '../navbar/Navbar';


const Header = () => {

    const [active, setActive] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)
    const showMenu = () => {
        setActive(true)
    }
    const detectWidth = () =>{
        setWidth(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener("resize", detectWidth)
        return() =>{
            window.removeEventListener("resize", detectWidth)
        }
    },[width])

    return(

        <header className={style.header}>
            <div className={style.logo}>Logo</div>
            <Navbar 
                showMenu={showMenu}
                width={width}/>
            <Menu
                active={active}
                setActive={setActive}
                >
                <ItemsMenu orientation='vertical'/>
                <div className={style.userVertical}><Link to='/login'><HiOutlineUser/></Link></div>
            </Menu>
            <div className={style.userHorizontal}>
                <Link to='/login'><HiOutlineUser/></Link>
            </div>
        </header>    
    )
}


export default Header