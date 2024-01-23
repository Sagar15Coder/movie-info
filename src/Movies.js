import React from 'react';
import { useGlobalContext } from './context';
import MovieCard from "./MovieCard";

const Movies = () => {
    const { movies, isLoading, isError} = useGlobalContext();
    console.log(movies)
    
    /*if (isLoading) {
        return (
            <div>
                Loading.....
            </div>
        )
    }*/

    if (isError.show) {
        return (
            <div>
                Movie Not Found
            </div>
        )
    }
    return (
    <>
        
          
            <div className="container">
                {
                    movies.map((movie) => {
                        return (
                            <MovieCard movie={movie} key={movie.imdbID} />
                        );
                    })
                }
            </div>
            
        
        
    </>
  )
}

export default Movies
