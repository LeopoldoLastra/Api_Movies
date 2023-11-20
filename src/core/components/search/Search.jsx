import { useContext } from "react"
import { MoviesContext } from "../../../context/MoviesContext"
import './search.css'



const Search = () => {

    const {handleSearch} = useContext(MoviesContext)

  return (
    <form 
        name='search' 
        className='searcher'>
            <label 
                className='searcher_icon'>{/* <HiSearch/> */}Buscar</label>
            <input 
                type='text' 
                placeholder='The Batman... ' 
                className='searcher_box'
                onChange={(e)=>handleSearch(e)}/>
    </form>
  )
}

export default Search