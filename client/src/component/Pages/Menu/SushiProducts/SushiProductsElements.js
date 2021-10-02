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
`;

export const CardContainer = styled.div`
  min-width: 300px;
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
  max-width: 60vw;
  max-height: 30vh;
  min-width: 260px;
  min-height: 130px;
  z-index: 10;
`;

export const SetPrice = styled.h4`
  position: absolute;
  background-color: #9f3434;
  border-radius: 8px;
  color: whitesmoke;
  width: 16vh;
  margin-top: -3%;
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
  color: darkgray;
`;

export const CartBtn = styled.button`
  color: #e1b486;
  background-color: #9f3434;
  width: 15%;
  margin: 5px;
  height: 10%;
  border: 3px;
  border-radius: 6px;
  font-size: 0.8em;
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
  width: 15px;
  height: 100%;
  font-allign: center;
  border: none;
  /* background-color: whitesmoke; */
  color: darkgray;
`;

export const Decrement = styled.button`
  border: none;
  border-radius: 5px;
  width: 30px;
  height: 100%;
  cursor: pointer;
`;

export const Increment = styled.button`
  border: none;
  border-radius: 5px;
  width: 30px;
  height: 100%;
  cursor: pointer;
`;
