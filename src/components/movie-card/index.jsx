import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'
import MovieCardContainer from './style'
import { useOnScreen } from '@/hooks'
import Skeleton from '@/components/skeleton'
import Image from '@/components/image'

function MovieCard({ movie, type }) {
  const config = useSelector(state => state.appReducer.config.images);
  const navigate = useNavigate();
  const ref = useRef(null);
  const isOnScreen = useOnScreen(ref);
  const [init, setInit] = useState(false);
  const [loadImg, setLoadImg] = useState(false);

  useEffect(() => {
    if (init || !isOnScreen) return;
    setInit(isOnScreen)
  }, [isOnScreen])
  
  const handleClickMovie = () => {
    if (!init) return;
    navigate(`/movie/${movie.id}`)
  }
  const handleLoaded = () => {
    setLoadImg(true)
  }
  return (
    <MovieCardContainer ref={ref} onClick={handleClickMovie} type={type}>
      <div className="card-img">
        {!loadImg && <div><Skeleton /></div>}
        {init && <Image src={`${config.base_url}${config.backdrop_sizes[0]}/${movie.backdrop_path}`} loading="lazy" onLoad={handleLoaded} />}
      </div>
      <div className="card-content">
        <div className='title'>
          { !loadImg && <Skeleton /> }
          { loadImg && movie.original_title }
        </div>
        <div className='date'>
          { !loadImg && <Skeleton /> }
          { loadImg && movie.release_date }
        </div>
      </div>
      <div className="vote">{movie.vote_average}</div>
    </MovieCardContainer>
  )
}

export default MovieCard