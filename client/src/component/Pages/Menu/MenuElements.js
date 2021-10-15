import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkTo = styled(Link)`
  text-decoration: none;
  display: block;
  font-style: italic;
  font-weight: 500;
  height: 100%;
  width: 100%;
  font-size: 2em;
  color: white;
`;

export const P = styled.p``;

export const Background = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left 0;
  z-index: -1;
  position: absolute;
  margin: 0;
  background: linear-gradient(
      0deg,
      rgba(125, 56, 87, 1) 0%,
      rgba(255, 126, 58, 1) 100%
    )
    no-repeat top right;
`;

export const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  border-radius: 20px;
  text-align: center;
  margin: 5px;
  height: 200px;
  width: 300px;

  @media only screen and (max-width: 350px) {
    width: 80%;
    height: 200px;
  }
`;
