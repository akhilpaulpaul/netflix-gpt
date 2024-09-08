import React from 'react'
import { TMDB_IMG } from '../utils/asset-urls';

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-40 pr-4'>
        <img src={TMDB_IMG + posterPath} alt="Movie card" className="max-w-full" />
    </div>
  )
}

export default MovieCard;