import { useState } from 'react'
import { MoviesContext } from './MoviesContext'


export default function MoviesProvider({children}) {

    const [state, setState] = useState(0)

    return(
        <MoviesContext.Provider
            value={{
                state,
                setState
            }}>
            {children}
        </MoviesContext.Provider>
    )
}