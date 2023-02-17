import React from 'react'
import { Link } from 'react-router-dom'
import HeaderContainer from './style'
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  React.useEffect(() => {
    
  }, [location]);

  return (
    <HeaderContainer>
      <nav>
        <input type="checkbox" id="nav-toggle" />
        <div className="logo">CINEMA</div>
        <ul className="links">
          <li><Link to="/now-playing" className={location.pathname.includes('now-playing') ? 'actived' : ''}>Now Playing</Link></li>
          <li><Link to="/top-rated" className={location.pathname.includes('top-rated') ? 'actived' : ''}>Top Rated</Link></li>
        </ul>
        <label htmlFor="nav-toggle" className="icon-burger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </label>
      </nav>
    </HeaderContainer>  
  )
}

export default Header