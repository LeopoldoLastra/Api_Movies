import { Link } from "react-router-dom"
import style from './itemsMenu.module.css'


const ItemsMenu = ({orientation}) => {
  return (
    <ul className= {
        orientation === 'horizontal' 
          ? style.horizontal 
          : style.vertical
        }>
        <li className={style.link}><Link to={'/inicio'}>Inicio</Link></li>
        <li className={style.link}><Link to={'/movie'}>Peliculas</Link></li>
        <li className={style.link}><Link to={'/tv'}>Series</Link></li>
        <li className={style.link}><Link to={'/nosotros'}>Nosotros</Link></li>
        <li className={style.link}><Link to={'/contacto'}>Contacto</Link></li>
    </ul>
  )
}


export default ItemsMenu