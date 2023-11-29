import style from './header.module.css';
import React, { useContext, useEffect } from 'react';
import { HiOutlineLogout, HiMenu } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MoviesContext } from '../../../context/MoviesContext';
import Menu from '../menuPortal/menu';
import ItemsMenu from '../menuPortal/ItemsMenu';
import Navbar from '../navbar/Navbar';
import { auth } from "../../../features/login/firebase/firebase";
import { signOut } from "firebase/auth";


const Header = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)
    const showMenu = () => {
        setActive(true)
    }
    const detectWidth = () => {
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener("resize", detectWidth)
        return () => {
            window.removeEventListener("resize", detectWidth)
        }
    }, [width])


    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/");
        } catch (e) {
            console.error("handleLogout Navigation.jsx" + e.message)
            window.alert("Error al Cerrar Sesión, Verifique su conexión!")
        }
    };

    return (

        <header className={style.header}>
            <div className={style.logo}>Logo</div>
            <Navbar
                showMenu={showMenu}
                width={width} />
            <Menu
                active={active}
                setActive={setActive}
            >
                <ItemsMenu orientation='vertical' />
                <div className={style.userVertical}> <HiOutlineLogout style={{ cursor: "pointer" }} onClick={handleLogout} /></div>
            </Menu>
            <div className={style.userHorizontal}>
                <HiOutlineLogout style={{ cursor: "pointer" }} onClick={handleLogout} />
            </div>
        </header>
    )
}


export default Header