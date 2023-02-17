import React, { useEffect } from 'react'
import { Outlet, useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    console.log('home change route');
    navigate("/now-playing");
  }, [])
  return (
    <Outlet />
  )
}

export default Home