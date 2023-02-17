import React from 'react'
import ImageContainer from './style'

function Image(props) {
  return (
    <ImageContainer>
      <img {...props} />
    </ImageContainer>
  )
}

export default Image