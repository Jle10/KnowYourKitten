import styled from "styled-components";

export const ButtonShuffle = styled.button`
  align-items: center;
  background-color: #ff9048;
  border-radius: 25px;
  border: none;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-size: 20px;
  font-family: 'Chango', cursive;
  font-weight: bold;
  justify-content: center;
  margin-bottom: 40px;
  padding: 10px 25px;
  transition: background-color ease .3s;
  text-transform: uppercase;
  z-index: 1;
  width: 90%;

  @media (min-width: 768px) {
    padding: 10px 100px;
    width: auto;

    &:hover,
    &:active {
      background-color: #cd641b;
    }
  }
`;