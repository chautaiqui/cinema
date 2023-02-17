import React from 'react'
import { Routes, Route } from "react-router-dom"
import LayoutApp from '@/container/layout'
import Home from '@/container/home'

function RouterContainer() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route
          path="/now-playing"
          element={
            <LayoutApp componentName='now playing' />
          }
        />
        <Route
          path="/top-rated"
          element={
            <LayoutApp componentName='top rated' />
          }
        />
      </Route>
    </Routes>
  )
}

export default RouterContainer