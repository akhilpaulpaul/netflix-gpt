import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { API_OPTIONS } from '../utils/asset-urls';
import { addNowPlayingMovies } from '../utils/movieSlice';

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?lpage=1",
      API_OPTIONS
    );
    const movieData = await data.json();
    dispatch(addNowPlayingMovies(movieData?.results));
  };

  useEffect(() => {
    nowPlayingMovies();
  }, []);
};
