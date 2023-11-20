import style from '../header/header.module.css';
import { useEffect } from 'react';
import { HiOutlineUser, HiMenu } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ItemsMenu from '../menuPortal/ItemsMenu';

const Navbar = ({showMenu}) => {
    const [width, setWidth] = useState(window.innerWidth)
    const detectWidth = () =>{
        setWidth(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener("resize", detectWidth)
        return() =>{
            window.removeEventListener("resize", detectWidth)
        }
    },[width])
    return (
        <nav className={style.navbar}>
            {
                width <= 770 && <div
                                    onClick={showMenu} 
                                    className={style.menuBtn}>
                                        <HiMenu />
                                </div>
            }
            { width > 770 && <ItemsMenu orientation='horizontal'/>}
        </nav>
    )
}

export default Navbar