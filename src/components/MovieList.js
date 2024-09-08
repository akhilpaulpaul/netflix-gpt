import React from 'react';

import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {

  return (
    <div className='mx-12'>
        <h1 className='text-2xl pt-8 font-bold text-white'>{ title }</h1>
        <div className='flex overflow-x-hidden py-4 hover:overflow-x-auto'>
            <div className='flex'>
                {movies?.map((movie) => (
                    <MovieCard key={movie?.id} posterPath={movie?.poster_path}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default MovieList