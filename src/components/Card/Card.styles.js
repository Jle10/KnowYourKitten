import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 3px 1px rgb(0 0 0 / 30%);
  justify-self: center;
  width: 100%;
  
  @media (min-width: 768px) {
    max-width: 500px;
  }
`;

export const CardImg = styled.img`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  max-height: 200px;
  object-fit: cover;
  width: 100%;
`;

export const CardFact = styled.p`
  font-size: 14px;
  line-height: 1.6;
  margin-top: 0;
  padding: 15px;

  .ellipsis {
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
  }
`;

export const CardReadMore = styled.button`
  color: #0e91cd;
  cursor: pointer;
  display: block;
  margin-top: 10px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  position: relative;
  width: 100%;

  background: none;
  border: 0;
  box-shadow: none;
  padding: 0;
  text-align: left;

  &:after {
    content: "";
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-bottom: 10px solid  #0e91cd;
    opacity: 0;
    position: absolute;
    left: 5px;
    top: 15px;
    transition: opacity ease-in .3s;
  }
  
  &:active,
  &:focus {
    &:after {
      opacity: 1;
    }
  }
`;

export const CardTooltip = styled.span`
  background-color: #0e91cd;
  border-radius: 2px;
  color: #fff;
  font-size: 12px;
  left: 0;
  opacity: 0;
  padding: 10px;
  position: absolute;
  max-width: 400px;
  top: 20px;
  transition: opacity ease-in .3s;
  
  .in & {
    opacity: 1;
  }
`;