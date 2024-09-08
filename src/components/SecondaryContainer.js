import React from "react";
import { useSelector } from "react-redux";

import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);

  if (!movies?.nowPlaying?.length) return;

  return (
    <div className="bg-black">
      <div className="relative z-20 -mt-60">
        <MovieList title="Now Playing" movies={movies.nowPlaying} />
        <MovieList title="Trending" movies={movies.nowPlaying} />
        <MovieList title="Popular" movies={movies.nowPlaying} />
        <MovieList title="Upcoming Movies" movies={movies.nowPlaying} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
