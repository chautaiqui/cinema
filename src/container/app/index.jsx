import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getConfig, getMovieNowPlaying } from './appThunk';
import { useNetwork } from '@/hooks';
import NetworkError from '@/components/networkError';
import RouterContainer from '@/auth/router';

export default function App() {
  const config = useSelector((state) => state.appReducer)
  const dispatch = useDispatch();
  const statusNetwork = useNetwork();
  useEffect(() => {
    // get config
    dispatch(getConfig());
  }, [])
  return (
    <>
      {statusNetwork && !config.loading && <div>
        <RouterContainer>
        </RouterContainer>
      </div>}
      {!statusNetwork && <NetworkError />}
    </>
  )
}
