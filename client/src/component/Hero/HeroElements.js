import styled, { keyframes } from "styled-components";

export const HeroContainer = styled.div`
  top: 0;
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #e1b486;

  background: rgba(0, 0, 0, 0.8);

  transform: translate(-50% -50%);
  /* z-index: 0; */
`;

export const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2 !important;
`;

const text = keyframes`
  30% {
    color:rgba(0, 0, 0, 0.6)
    padding-top: 90px;
    transform: translate(0, 90px);
  }
  80%{
    letter-spacing: .3rem;
    padding-top: 0px;
  }
`;

export const Welcome = styled.p`
  font-size: 3rem;
  position: relative;
  margin: 0;
  width: 100%;
  text-align: center;
  letter-spacing: 2px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(30px);
  animation: ${text} 3s 1;
`;

export const Name = styled.p`
  font-size: 36px;
  margin: 0 !important;
  z-index: 5 !important;
  font-style: italic;
  width: 100%;
`;
