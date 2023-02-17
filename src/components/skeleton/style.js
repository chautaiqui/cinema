import styled from "styled-components";

const SkeletonContainer = styled.div`
width: 100%;
height: 100%;
.skeleton {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #e8e8e8 0px, #f8f8f8 40px, #e8e8e8 80px);
  background-size: 350px;
  width: 100%;
  border-radius: 3px;
  animation: shine 1.5s infinite;
}

@keyframes shine {
	0% {
    background-position: -100px;
  }
  40%,
  100% {
    background-position: 270px;
  }
}
`

export default SkeletonContainer