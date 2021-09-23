import styled from "styled-components";
import background from "../../assets/background.jpg";

export const MainContainer = styled.main`
  align-items: center;
  background-image: url(${ background });
  background-repeat: unset;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
`;

export const Overlay = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;