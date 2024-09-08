import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { API_OPTIONS } from "../utils/asset-urls";
import { addTrailerDetails } from "../utils/movieSlice";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const movieData = await data.json();

    const filteredData = movieData.results.filter(
      (video) => video?.type === "Trailer"
    );
    const trailer = filteredData.length
      ? filteredData[0]
      : movieData.results[0];

    dispatch(addTrailerDetails(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useTrailerVideo;
