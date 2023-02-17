import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieDetail } from "./movieThunk"
import MovieContainer from './style'
import Loading from '@/components/loading'

function Movie() {
  let { movieId } = useParams();
  const dispatch = useDispatch();
  const movieState = useSelector((state) => state.movieReducer)
  useEffect(() => {
    dispatch(getMovieDetail({
      id: movieId,
      language: 'en-US'
    }))
  }, [])

  return (
    <MovieContainer>
      {movieState.loading && <Loading />}
      <div className="movie">

      </div>
    </MovieContainer>
  )
}

export default Movie