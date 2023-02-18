import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TopRatedContainer from './style'
import Loading from '@/components/loading'
import { getTopRatedMovie } from "./topratedThunk"
import Image from '@/components/image'
import GridImage from '@/assets/images/grid_30.png'
import ListImage from '@/assets/images/list_30.png'
import { setType, setQuery, setLoading } from './topratedSlice'
import EmptyList from '@/components/empty-list'
import MovieCard from '@/components/movie-card'
import { v4 as uuidv4 } from 'uuid'
import { Pagination } from 'antd'

function TopRated() {
  const dispatch = useDispatch()
  const topRatedState = useSelector((state) => state.topratedReducer)

  useEffect(() => {
    dispatch(setLoading(true))
    setTimeout(() => {
      dispatch(getTopRatedMovie(
        {
          language: 'en-US',
          page: 1,
        }
      ));
    }, 1000)
  }, [])

  const changeType = (type) => {
    if (topRatedState.type === type) return
    dispatch(setType(type))
  }

  const onPaginationChange = (page, pageSize) => {
    dispatch(setQuery({ ...topRatedState.query, page }))
    dispatch(setLoading(true))
    setTimeout(() => {
      dispatch(getTopRatedMovie(
        {
          language: 'en-US',
          page,
        }
      ));
    }, 1000)
  }

  return (
    <TopRatedContainer>
      {topRatedState.loading && <Loading />}
      <h1>Top Rated Movie</h1>
      <h3>Page: {topRatedState.query.page}</h3>
      <ul>
        <li>
            <input type="radio" name="radio-group" checked={topRatedState.type === 'grid'} onChange={() => changeType('grid')}/>
            <label htmlFor="grid"><Image src={GridImage} /></label>
        </li>
        <li onClick={()=>changeType('list')}>
          <input type="radio" name="radio-group" checked={topRatedState.type === 'list'} onChange={() => changeType('list')}/>
          <label htmlFor="grid"><Image src={ListImage} /></label>
        </li>
      </ul>
      <div className={`list-movie ${topRatedState.type === 'list' ? 'fl-col' : 'fl-row'}`}>
        {(!topRatedState.movies.length && <EmptyList />)}
          {
            topRatedState.movies.map((movie) => {
              return <MovieCard key={uuidv4()} movie={movie} type={topRatedState.type || 'grid'} />
            })
          }
      </div>
      <div className="pagination">
        {topRatedState.query.page && topRatedState.query.total_pages && <Pagination
          current={topRatedState.query.page}
          onChange={onPaginationChange}
          showSizeChanger={false}
          total={topRatedState.query.total_pages}
        />}
      </div>
    </TopRatedContainer>
  )
}

export default TopRated