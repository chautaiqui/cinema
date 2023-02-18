import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieDetail } from "./movieThunk"
import MovieContainer from './style'
import Loading from '@/components/loading'
import Image from '@/components/image';

function Movie() {
  let { movieId } = useParams();
  const dispatch = useDispatch();
  const movieState = useSelector((state) => state.movieReducer)
  const config = useSelector((state) => state.appReducer.config.images)
  useEffect(() => {
    dispatch(getMovieDetail({
      id: movieId,
      language: 'en-US'
    }))
  }, [])

  return (
    <MovieContainer
      background={`${movieState.detail.backdrop_path}`}
      base_url={`${config.base_url}${config.backdrop_sizes[config.backdrop_sizes.length - 1]}/`}
    >
      {movieState.loading && <Loading />}
      <div className="movie">
        <div className="back-drop">
        </div>
        <div className="poster">
          <Image
            src={`${config.base_url}${config.backdrop_sizes[config.backdrop_sizes.length - 1]}/${movieState.detail.poster_path}`}
          />
          <div className="content">
            <h1 className="text-left-p20 title">{movieState.detail.title}</h1>
            <p className='text-left-p20 year'>{movieState.detail.release_date}</p>
            <div className="text-left-p20 vote">{
              movieState.detail.vote_average ? movieState.detail.vote_average.toString().slice(0,3) : ''
            }</div>
            <p className="text-left-p20 tagline">{movieState.detail.tagline}</p>
            <h3 className="text-left-p20">Overview</h3>
            <p className="text-left-p20 overview">{movieState.detail.overview}</p>
          </div>
        </div>
      </div>
    </MovieContainer>
  )
}

export default Movie