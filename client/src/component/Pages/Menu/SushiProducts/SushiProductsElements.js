import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled(Link)`
  text-decoration: none;
  border-radius: 23px;
  margin: 10px;
  width: 100%;
  height: 100%;
  text-align: center;
  cursor: pointer;
  position: relative;
`;

export const CardContainer = styled.div`
  min-width: 300px;
  font-family: Arial, sans-serif;
  margin: 20px;
`;

export const CardDetailsContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const SetImage = styled.img`
  border-radius: 20px 20px 20px 0;
  max-width: 100%;
  max-height: 100%;
  z-index: 10;
`;

export const SetPrice = styled.h4`
  position: absolute;
  bottom: -10px;
  left: -5px;
  width: 100px;
  font-size: 15px;
  padding: 2px;
  background-color: #9f3434;
  border-radius: 8px;
  color: whitesmoke;
  text-align: center;
  z-index: 1;
`;

export const SetTitle = styled.h5`
  color: darkgrey;
  font-style: italic;
  text-align: center;
`;

export const SetPortion = styled.h5`
  display: inline;
  margin: 5px;
  font-size: 18px;
  color: darkgray;
`;

export const CartBtn = styled.button`
  color: #e1b486;
  background-color: #9f3434;
  margin: 5px;
  padding: 2px 10px;
  height: 10%;
  border: 3px;
  border-radius: 6px;
  font-size: 18px;
  cursor: pointer;
`;

export const QtyContainer = styled.div`
  display: flex
  margin: 5px;
  flex-direction: row;
  justify-content: center;
`;

export const SetQty = styled.input`
  outline: none;
  box-shadow: none;
  width: 20px;
  height: 100%;
  font-size: 18px;
  font-align: center;
  border: none;
  /* background-color: whitesmoke; */
  color: darkgray;
`;

export const Decrement = styled.button`
  border: none;
  font-size: 18px;
  border-radius: 5px;
  font-align: center;
  width: 30px;
  height: 100%;
  cursor: pointer;
`;

export const Increment = styled.button`
  border: none;
  font-size: 18px;
  border-radius: 5px;
  font-align: center;
  width: 30px;
  height: 100%;
  cursor: pointer;
`;
