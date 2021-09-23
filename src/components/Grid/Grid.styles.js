import styled from "styled-components";

export const GridContainer = styled.div`
  column-gap: 15px;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  margin-bottom: 40px;
  row-gap: 15px;
  width: 90%;
  z-index: 1;

  @media (min-width: 768px) {
    column-gap: 20px;
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;
    width: 70%;
  }
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;