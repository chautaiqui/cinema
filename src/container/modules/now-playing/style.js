import styled from "styled-components";

const NowPlayingContainer = styled.div`
  overflow-y: scroll;
  padding: 20px;
  display: flex;
  .tool-box {
    display: flex;
    flex: 0 0 20%;
    flex-direction: column;
    h1 {
      font-family: SourceSansPro-Bold;
      font-size: 24px;
    }
    ul > li {
      list-style: none;
      padding: 0px 5px;
      display: inline-flex;
      cursor: pointer;
      label {
        float: left;
        clear: none;
        display: block;
        padding: 0px 10px 0px 10px;
      }
      
      input[type=radio],
      input.radio {
        float: left;
        clear: none;
        margin: 2px 0 0 2px;
      }
    }
    .search-box {
      width: 100%;
      box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
      padding: 10px;
      border: 1px solid #e3e3e3;
      border-radius: 10px;
      max-width: 500px;
      button {
        align-items: center;
        appearance: none;
        background-color: #3EB2FD;
        background-image: linear-gradient(1deg, #4F58FD, #149BF3 99%);
        background-size: calc(100% + 20px) calc(100% + 20px);
        border-radius: 100px;
        border-width: 0;
        box-shadow: none;
        box-sizing: border-box;
        color: #FFFFFF;
        cursor: pointer;
        display: inline-flex;
        font-family: CircularStd,sans-serif;
        font-size: 1rem;
        height: auto;
        justify-content: center;
        line-height: 1.5;
        padding: 6px 20px;
        position: relative;
        text-align: center;
        text-decoration: none;
        transition: background-color .2s,background-position .2s;
        user-select: none;
        touch-action: manipulation;
        vertical-align: top;
        white-space: nowrap;
      }
      button:disabled{
        background:  #fff;
        color: #ccc;
        cursor: no-drop;
      }
    }
  }
  .list-movie {
    gap: 20px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    display: flex;
    flex: 0 0 70%
    flex-direction: row;
    max-width: 80%;
    margin: auto;
    padding: 10px;
    margin-top: 20px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    .tool-box, .list-movie {
      flex: 0 0 100%;
    }
    .search-box {
      margin: auto;
    }
  }
`;

export default NowPlayingContainer;