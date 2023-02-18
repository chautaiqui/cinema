import styled from "styled-components";

const MovieContainer = styled.div`
  height: calc( 100vh - 100px );
  .movie {  
    .poster {
      animation: fadeIn ease 3s;
      position: relative;
      display: flex;
      box-shadow: rgb(0 0 0 / 2%) 0px 1px 3px 0px, rgb(27 31 35 / 15%) 0px 0px 0px 1px;
      margin: 20px;
      margin-top: 50px;
      padding: 20px;
      background: #fff;
      border-radius: 10px;
      div:first-child {
        flex: 0 0 30%;
        z-index: 10;
        img {
          max-width: 100%;
        }
      }
      .content {
        z-index: 20;
        .text-left-p20 {
          text-align: left;
          padding-left: 20px;
          font-family: SourceSansPro-SemiBold;
        }
        .title {
          font-family: SourceSansPro-Bold;
          font-size: 24px;
        }
        .vote {
          border-radius: 50%;
          width: 50px;
          height: 50px;
          background: #fff;
          color: #000;
          text-align: center;
          line-height: 50px;
          font-family: SourceSansPro-Bold;
          margin-left: 20px;
          margin-bottom: 10px;
          padding: 0;
          font-size: 16px;
        }
        .year {
          // color: #d9d9d9;
        }
      }
    }
    .poster::before { 
      ${ props => 
        props.background ? `
          background-image: url(${props.base_url}${props.background});
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          content: "";
          position: absolute;
          top: 0px;
          right: 0px;
          bottom: 0px;
          left: 0px;
          opacity: 0.25;
          border-radius: 10px;
        ` : ``
      }
    }
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
  }
`

export default MovieContainer