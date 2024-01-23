import React, { useState, useEffect} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { API_URL } from './context';
import { useGlobalContext } from './context';


const MoviePage = () => {

    const { id } = useParams();
    const { isLoading, setIsLoading, isError, setIsError } = useGlobalContext();
    const [movie, setMovie] = useState("");
    //const [isError, setIsError] = useState({show: false, msg: ""});
    //const [isLoading, setIsLoading] = useState(true);
    
    const getMovie = async (id) => {
        setIsLoading(true);
        try {
            const response = await fetch(`${API_URL}&i=${id}`);
            const data = await response.json();
            if (data.Response === "True") {
                setMovie(data);
                setIsLoading(false);
                console.log(data);
                setIsError({
                    show: false, 
                    msg: "",
                })
                
            }
            else {
                setIsError({
                    show: true, 
                    msg: data.Error,
                })
            }

        } catch (error) {
            console.log("hello error");
            console.log(error);
        }
        
    }

    useEffect(() => {
        getMovie(id)               
    }, [id]);
    
    const { Title, Genre, Released, imdbRating, Country, Poster, Language, Director, Actors, Plot } = movie;

    if (isLoading) {
        return (
            <div>
                Loading.......
            </div>
        )
    }

    if (isError.show) {
         return (
             <div>
                 Movie Not Found
             </div>
         )
     }

    return (
        <>

            <div className='single-movie-box'>
                <div className='single-movie-poster'>
                    <img src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400'} alt={Title}/>
                </div>
                <div className='single-movie-info'> 
                    <h3>{Title}</h3>
                    <p>Genre: {Genre}</p>
                    <p>Released Date: {Released}</p>
                    <p>IMDB Rating: {imdbRating}</p>
                    <p>Country: {Country}</p>
                    <p>Language: {Language}</p>
                    <p>Directed By: {Director}</p>
                    <p>Actors: {Actors}</p>
                    <p>Plot: {Plot}</p>
                    <NavLink className='back-button' to="/">Go Back</NavLink>
                </div>
            </div>
    
        </>
    )
}

export default MoviePage