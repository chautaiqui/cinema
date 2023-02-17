import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieDetail } from "./movieThunk"

function Movie() {
  let { movieId } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.movieReducer)
  useEffect(() => {
    dispatch(getMovieDetail({
      id: movieId,
      language: 'en-US'
    }))
  }, [])

  return (
    <div>{ movieId }</div>
  )
}

export default Movie