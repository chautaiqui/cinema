import React from 'react'
import NetworkErrorContainer from './style'

const network_image = require('@/assets/images/no-internet-picture.png');
function NetworkError() {
  return (
    <NetworkErrorContainer>
      <img src={network_image} />
      <h3>Your internet connection is down, please try again.</h3>
    </NetworkErrorContainer>
  )
}

export default NetworkError