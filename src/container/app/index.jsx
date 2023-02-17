import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getConfig, getMovieNowPlaying } from './appThunk';
import { useNetwork } from '@/hooks';
import NetworkError from '@/components/networkError';
import RouterContainer from '@/auth/router';

export default function App() {
  // const config = useSelector((state) => state.config)
  const dispatch = useDispatch();
  const statusNetwork = useNetwork();
  useEffect(() => {
    // get config
    dispatch(getConfig());
    dispatch(getMovieNowPlaying({language: 'en-US'}));
  }, [])
  return (
    <>
      {statusNetwork && <div>
        <RouterContainer>
          Qui
        </RouterContainer>
      </div>}
      {!statusNetwork && <NetworkError />}
    </>
  )
}
