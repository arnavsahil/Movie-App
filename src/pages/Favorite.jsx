import React from "react";
import "../css/Favorite.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
const Favorite = () => {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="movies-grid">
        {favorites.map((movie) => (
          /*movie.title.toLowerCase().startsWith(searchQuery) && */ <MovieCard
            movie={movie}
            key={movie.id}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="favorite-empty">
      <h2>No Favorite Movies yet</h2>
      <p>Start adding movies to your favourites and they will appear here</p>
    </div>
  );
};

export default Favorite;
