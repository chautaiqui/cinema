import React from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import LayoutContainer from './style'

function LayoutApp({ componentName }) {
  return (
    <LayoutContainer>
      <Layout>
        headers
         <Link to="/now-playing">Now Playing</Link>
         <Link to="/top-rated">Top Rated</Link>
        {componentName}
      </Layout>
    </LayoutContainer>
  )
}

export default LayoutApp