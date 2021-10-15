import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left 0;
  z-index: -1;
  position: absolute;
  margin: 0;
  background: linear-gradient(
      185deg,
      rgba(55, 55, 55, 1) 0%,
      rgba(0, 0, 0, 1) 100%
    )
    no-repeat top right;
`;
