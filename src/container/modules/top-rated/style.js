import styled from "styled-components";

const TopRatedContainer = styled.div`
  h1 {
    text-align: left;
    padding: 20px;
    font-family: SourceSansPro-Bold;
    font-size: 24px;
  }
  h3 {
    text-align: left;
    padding: 0;
    margin-left: 20px;
    font-family: SourceSansPro-SemiBold;
    font-size: 18px;
  }
  ul {
    float: right;
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
  .list-movie {
    gap: 20px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    display: flex;
    flex: 0 0 100%
    flex-direction: row;
    width: 100%;
    margin: auto;
    padding: 10px;
    margin-top: 50px;
  }
  .fl-col {
    flex-direction: column;
  }
  .pagination {
    height: 50px;
    text-align: center;
    display: flex;
    justify-content: center;
    padding: 20px;
    margin-bottom: 20px;
  }
`

export default TopRatedContainer