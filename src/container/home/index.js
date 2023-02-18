import React, { useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from "react-router-dom"

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') navigate("/now-playing");
  }, [])
  return (
    <Outlet />
  )
}

export default Home