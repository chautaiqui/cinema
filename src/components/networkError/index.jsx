import React from 'react'
import NetworkErrorContainer from './style'
import Header from '@/components/header'

function NetworkError() {
  return (
    <NetworkErrorContainer>
      <Header />
      <div className='noti-network'>
        <h1>Network Error</h1>
        <h3>Your internet connection is down, please try again.</h3>
      </div>
    </NetworkErrorContainer>
  )
}

export default NetworkError