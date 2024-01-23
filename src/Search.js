import React from 'react'

import { useGlobalContext } from './context';

const Search = () => {
    const { searchMovieTerm, setSearchMovieTerm, isError } = useGlobalContext();

    return (
        <>
            <div className="search">
            
                
                    <input
                        type = "text"
                        placeholder="Search movie"
                        value={searchMovieTerm}
                        onChange={(e) => setSearchMovieTerm(e.target.value)}
                    />
            
            </div>
            
            
            <div>
                <p>{isError.show && isError.msg}</p>
            </div>
        </>
    )
}

export default Search