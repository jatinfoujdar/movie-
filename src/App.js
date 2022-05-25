import React, { useState } from "react";
import "./styles.css";

var moviesDataBase = {
  action: [
    { name: "superman", rating: "4/5" },
    { name: "DeadPool", rating: "4.9/5" },
    { name: "DeadPool2", rating: "3.5/5" }
  ],

  thriller: [
    {
      name: "Drishyam",
      rating: "5/5"
    },
    {
      name: "Black Widow",
      rating: "4.5/5"
    },
    {
      name: "Thappad",
      rating: "3/5"
    }
  ],
  horror: [
    {
      name: "Anabelle",
      rating: "3.5/5"
    },
    {
      name: "Bhoot Police",
      rating: "5/5"
    },
    {
      name: "shh. phir koi hai",
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
        <span role="img"> 🎞️ </span>Movies recommender
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
