import styled from "styled-components";

const HeaderContainer = styled.div`
height: 100px;
position: relative;
nav {
  position: fixed;
  z-index: 20;
  left: 0;
  right: 0;
  top: 0;
  height: 100px;
  background-color: #000000;
  padding: 0 5%;

}
nav .logo { 
  float: left;
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #fff;
}
nav .links {
  float: right;
  padding: 0;
  margin: 0;
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
nav .links li {
  list-style: none;
}
nav .links a {
  display: block;
  padding: 1em;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  position: relative;
}
nav .links a:hover {
  color: white;
}
nav .links a::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: white;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}
nav .links a:hover::before {
  visibility: visible;
  transform: scaleX(1);
  color: white;
}
nav .links a.actived::before {
  visibility: visible;
  transform: scaleX(1);
  color: red;
}
#nav-toggle {
    position: absolute;
    top: -100px;
}
nav .icon-burger {
  display: none;
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
}
nav .icon-burger .line {
  width: 30px;
  height: 5px;
  background-color: #fff;
  margin: 5px;
  border-radius: 3px;
  transition: all .5s ease-in-out;
}
@media screen and (max-width: 768px) {
  nav .logo {
    float: none;
    width: auto;
    justify-content: center;
  }
  nav .links {
    float: none;
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 100px;
    bottom: 100%;
    width: auto;
    height: 0;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: rgba(0, 0, 0, .8);
    overflow: hidden;
    transition: all .5s ease-in-out;
  }
  nav .links a {
    font-size: 20px;
  }
  nav :checked ~ .links {
    height: 200px;
    bottom: 0;
  }
  nav .icon-burger {
    display: block;
  }
  nav :checked ~ .icon-burger .line:nth-child(1) {
    transform: translateY(10px) rotate(225deg);
  }
  nav :checked ~ .icon-burger .line:nth-child(3) {
    transform: translateY(-10px) rotate(-225deg);
  }
  nav :checked ~ .icon-burger .line:nth-child(2) {
    opacity: 0;
  }
}
`

export default HeaderContainer;