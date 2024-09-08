import React from "react";

import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";
import MovieSearch from "./MovieSearch";

const Browse = () => {
  const isGptSearch = useSelector((state) => state.gpt.isGptSearch);
  console.log(isGptSearch)
  useNowPlayingMovies();

  return (
    <>
      <Header />
      {isGptSearch ? (
        <MovieSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
