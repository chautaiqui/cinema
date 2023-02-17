import styled from "styled-components";

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  gap: 20px;
  h3 {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    /* width: 100px; */
    height: fit-content !important;
    margin: auto;
    font-family: SourceSansPro-Bold;
    font-size: 18px;
  }
`

export default EmptyContainer