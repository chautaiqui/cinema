import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '@/components/loading';
import { getMovieNowPlaying } from "./nowPlayingThunk"
import { setLoading, setType } from './nowPlayingSlice';
import NowPlayingContainer from './style';
import MovieCard from '@/components/movie-card';
import { v4 as uuidv4 } from 'uuid';
import Image from '@/components/image';
import { useScroll } from '@/hooks';
import GridImage from '@/assets/images/grid_30.png';
import ListImage from '@/assets/images/list_30.png';
import { Form, Button, Input, Checkbox, Select } from 'antd';
import EmptyList from '../../../components/empty-list';

function getListyear(startYear){
  startYear = (typeof(startYear) == 'undefined') ? 1980 : startYear
  var currentYear = new Date().getFullYear();
  var years = []
  for(var i=startYear;i<=currentYear;i++){
      years.push(i);
  } 
  return years.reverse();
}

function NowPlaying() {
  const dispatch = useDispatch();
  const papeOffset = useScroll();
  const nowPlayingState = useSelector((state) => state.nowplayingReducer)
  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(getMovieNowPlaying(
        {
          language: 'en-US',
          page: nowPlayingState.query.page ? nowPlayingState.query.page + 1 : 1,
          endpoint: 'movie/now_playing'
        }
      ));
    }, 1000)
  }, [papeOffset])

  const changeType = (type) => {
    if (nowPlayingState.type === type) return
    dispatch(setType(type))
  }
  const onSearch = (values) => {
    if (!Object.values(values).filter(item => item).length) return;
    console.log(values)
    form.setFieldsValue(values);
    dispatch(setLoading(true));
    setTimeout(() => {
      const param = {
        language: 'en-US',
        ...values,
        endpoint: 'search/movie'
      }
      const newParam = {};
      for (const [key, value] of Object.entries(param)) {
        if (value) newParam[key] = value
      }
      console.log(param, newParam)
      dispatch(getMovieNowPlaying(newParam));
    }, 1000)
  }

  return (
    <NowPlayingContainer>
      {nowPlayingState.loading && <Loading />}
        <div className="tool-box">
          <h1>Now Playing Movie</h1>
          <ul>
            <li>
                <input type="radio" name="radio-group" checked={nowPlayingState.type === 'grid'} onChange={() => changeType('grid')}/>
                <label htmlFor="grid"><Image src={GridImage} /></label>
            </li>
            <li onClick={()=>changeType('list')}>
              <input type="radio" name="radio-group" checked={nowPlayingState.type === 'list'} onChange={() => changeType('list')}/>
              <label htmlFor="grid"><Image src={ListImage} /></label>
            </li>
          </ul>
          <div className="search-box">
            <Form
              name="search"
              form={form}
              onFinish={onSearch}
            >
              <Form.Item
                label="Name"
                name="query"
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="include_adult"
                valuePropName="checked"
              >
                <Checkbox>Include adult</Checkbox>
              </Form.Item>
              <Form.Item name="year" label="Year">
                <Select
                  placeholder="Year"
                >
                  {getListyear().map((year) => <Select.Option value={year} key={year}>{year}</Select.Option>)}
                </Select>
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit">
                  Search
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="list-movie">
          {(!nowPlayingState.movies.length && <EmptyList />)}
          {
            nowPlayingState.movies.map((movie) => {
              return <MovieCard key={uuidv4()} movie={movie} type={nowPlayingState.type || 'grid'} />
            })
          }
        </div>
    </NowPlayingContainer>
  )
}

export default NowPlaying