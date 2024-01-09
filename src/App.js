import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const apiUrl = "https://www.omdbapi.com?apikey=74c3a9b3";
const movie1 = {
  Title: "Star Wars: Episode IX - The Rise of Skywalker",
  Year: "2019",
  imdbID: "tt2527338",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl} &s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("batman");
  }, []);
  return (
    <div className="app">
      <h1>Movie Villa</h1>
      <div className="search">
        <input
          placeholder=" Search For movie"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />

        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
