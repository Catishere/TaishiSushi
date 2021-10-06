import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductsContainer = styled.div`
  width: 100%;
  background-color: #100c0b;
  padding-top: 20px;
  color: #fff;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
`;
export const ProductCard = styled.div`
  line-height: 2;
  width: 300px;
`;

export const ProductImg = styled.img`
  height: 230px;
  min-width: 300px;
  width: 100%;
  border-radius: 20px;
  box-shadow: 6px 6px #e1b486;
  object-fit: cover;

  :hover {
    width: 120%;
    box-shadow: 9px 9px 9px 9px black;
  }
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  color: #e1b486;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  height: 50px;
  position: relative;
  font-size: 1.4rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;
export const ProductDesc = styled.p``;

export const ProductPortion = styled.p`
  font-size: 1.4rem;
`;

export const ProductPrice = styled.p`
  font-size: 1.4rem;
`;
export const ProductButton = styled(Link)`
  font-size: 1rem;
  font-family: Arial, sans-serif;
  text-decoration: none;
  padding: 1rem 4rem;
  border-radius: 2rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;

  :hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
