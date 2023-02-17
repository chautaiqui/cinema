import React from 'react'
import { Layout } from 'antd'
import { Link } from 'react-router-dom'
import NowPlaying from '@/container/modules/now-playing'
import TopRated from '@/container/modules/top-rated'
import Movie from '@/container/modules/movie'
import LayoutContainer from './style'
import Header from '@/components/header'

function LayoutApp({ componentName }) {
  const components = {
    "now-playing": NowPlaying,
    "top-rated": TopRated,
    "movie": Movie,
  }
  const SpecificComponent = components[componentName]
  return (
    <LayoutContainer>
      <Layout>
        <Header />
        <SpecificComponent />
      </Layout>
    </LayoutContainer>
  )
}

export default LayoutApp