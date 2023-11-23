import './search.css'

export default function Search({handlerSearchChange, searchedMovie}) {
  return (
    <form name='search' className='searcher'>
        <input 
            type='text' 
            placeholder='Batman Inicia...'
            onChange={handlerSearchChange} 
            className='searcher_input'
            value={searchedMovie}
            />
    </form>
  )
}
