import React from "react";
import { Link } from "react-router-dom";

function MoviesList({ movies }) {
    //Object.keys(movies) gets an array of the keys, then mapping over that array. 
  const renderMovies = Object.keys(movies).map((movieID) => (
    <li key={movieID}>
        {/* Now the links go to a different URL depending on that movie's ID. */}
      <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
    </li>
  ));

  return <ul>{renderMovies}</ul>;
}

export default MoviesList;