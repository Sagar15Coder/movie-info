import React from "react";
import { NavLink } from "react-router-dom";

const MovieCard = ({ movie }) => {
    const { Title, Year, imdbID, Type, Poster } = movie;
    return (
      <NavLink to={`movie/${imdbID}`}>
        <div className="movie">
          <div>
            <p>{Year}</p>
          </div>
          <div>
            <img src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400'} alt={Title}/>
          </div>
          <div>
            <span>{Type}</span>
            <h3>{Title}</h3>
          </div>
        </div>
      </NavLink>
    )
}

export default MovieCard