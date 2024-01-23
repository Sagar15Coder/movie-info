import React, { useState, useEffect, useContext} from "react";

export const API_URL = `https://www.omdbapi.com/?&apikey=${process.env.REACT_APP_API_KEY}`;
    // 32b0cdae
    /*const movie1 = {
        "Title": "Batman v Superman: Dawn of Justice",
        "Year": "2016",
        "imdbID": "tt2975590",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        }
    */
const Cont = React.createContext();

const Prov = ({ children}) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
     const [isError, setIsError] = useState({show: false, msg: ""});
    const [searchMovieTerm, setSearchMovieTerm] = useState("Batman");
    
    const searchMovies = async (title) => {
        try {
            const response = await fetch(`${API_URL}&s=${title}`);
            const data = await response.json();
            if (data.Response === "True") {
                setMovies(data.Search);
                setIsLoading(false);
                setIsError({
                    show: false,
                    msg: "",
                })
            }
            else {
                setIsError({
                    show: true,
                    msg: data.error,
                })
            }

        } catch (error) {
            console.log("hello error");
            console.log(error);
        }
        
    }

    useEffect(() => {
        let timer = setTimeout(() => {
            searchMovies(searchMovieTerm);
        }, 2000);
        return () => clearTimeout(timer);        
    }, [searchMovieTerm]);


    return (
    <>
    <Cont.Provider value={{movies, isError, setIsError, isLoading, setIsLoading, searchMovieTerm, setSearchMovieTerm}}>
        {children}
    </Cont.Provider>

    </>
    )
   
};

const useGlobalContext = () => {
    return useContext(Cont);
};

export  { Cont, Prov, useGlobalContext };
