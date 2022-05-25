import React, { useState } from "react";
import "./styles.css";

var moviesDataBase = {
  action: [
    { name: " Spiderhead ", rating: "4/5" },
    { name: " K.G.F: Chapter 2", rating: "4.9/5" },
    { name: " The King's Man", rating: "3.5/5" }
  ],

  thriller: [
    {
      name: "The Northman",
      rating: "5/5"
    },
    {
      name: " Morbius",
      rating: "4.5/5"
    },
    {
      name: "Prey",
      rating: "3/5"
    }
  ],
  horror: [
    {
      name: "Anabelle",
      rating: "3.5/5"
    },
    {
      name: " Scream",
      rating: "5/5"
    },
    {
      name: " The Hunt",
      rating: "3/5"
    }
  ]
};

export default function App() {
  const moviesDB = Object.keys(moviesDataBase);
  const [selectedGenre, setGenre] = useState("horror");
  function genreClickHandler(genre) {
    return setGenre(genre);
  }
  return (
    <div className="App container">
      <h1>
        {" "}
        <span role="img"> 📼 </span>Movies Generator
      </h1>
      <p>I m recommending you some of my favourites movies</p>
      <div className="container">
        {moviesDB.map(function (genre) {
          return (
            <button
              className="btn"
              key={genre}
              onClick={() => genreClickHandler(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <ul className="list">
        {moviesDataBase[selectedGenre].map(function (movies) {
          return (
            <li key={movies.name} className="list-item">
              <div style={{ fontSize: "larger" }}> {movies.name} </div>
              <div style={{ fontSize: "smaller" }}> {movies.rating} </div>
            </li>
          );
        })}
      </ul>{" "}
    </div>
  );
}
