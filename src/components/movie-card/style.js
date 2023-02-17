import styled from "styled-components";

const MovieCardContainer = styled.div`
  width: ${ props => props.type === 'grid' ? '250px' : '100%' };
  max-width: 800px;
  height: auto;
  min-height: 220px;
  background-color: silver;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  background-color: #fff;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  ${props => props.type === 'grid' ? '' : `
      display: flex;
      gap: 20px;
      min-height: 141px;
  `}
  .card-img {
    ${props => props.type === 'grid' ? '' : `
        width: 250px;
    `}
    height: 141px;
    div {
      height: 141px;
      width: 250px;
      position: absolute;
      z-index: 10;
      top: 0;
    }
    img {
      max-width: 100%;
      ${props => props.type === 'grid' ? `
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      ` : `
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      `}
      
    }
  }
  .card-content {
    .title {
      padding: 5px 5px;
      margin: 0;
      text-align: left;
      font-family: SourceSansPro-Bold;
      font-size: 16px;
      div {
        width: 100%;
        height: 30px;
      }
    }
    .date {
      text-align: left;
      padding: 5px;
      margin: 0;
      color: #d9d9d9;
      font-size: 14px;
      div {
        width: 100%;
        height: 30px;
      }
    }
  }
  .vote {
    position: absolute;
    right: 5px;
    top: 5px;
    top: 9px;
    border-radius: 50%;
    width: 34px;
    height: 34px;
    background: #fff;
    color: #000;
    text-align: center;
    line-height: 34px;
    font-family: SourceSansPro-Bold;
    z-index: 12;
    ${props => props.type === 'grid' ? '' : `
      background: #000;
      color: #fff;
    `}
  }

`

export default MovieCardContainer