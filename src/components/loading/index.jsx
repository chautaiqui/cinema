import React from 'react'
import LoadingContainer from './style'

function Loading() {
  return (
    <LoadingContainer>
      <div className="mask"></div>
      <div className="lds-facebook"><div></div><div></div><div></div></div>
    </LoadingContainer>
  )
}

export default Loading