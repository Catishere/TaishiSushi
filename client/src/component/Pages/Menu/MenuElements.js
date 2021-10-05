import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkTo = styled(Link)`
  text-decoration: none;
  display: block;
  font-style: italic;
  font-weight: 500;
  margin-top: 20%;
  height: 100%;
  width: 100%;
  font-size: 2em;
  color: white;
`;

export const P = styled.p``;

export const GridContainer = styled.div`
  display: grid;
  gap: 1em;

  padding-top: 6em;
  padding-left: 3em;
  width: 100%;
  height: 85vh;
  grid-template-columns: 30% 30% 30%;
  grid-auto-rows: minmax(230px, 260px);
  justify-content: start;
  align-items: center;
  text-align: center;
  cursor: pointer;
  background: linear-gradient(
    0deg,
    rgba(125, 56, 87, 1) 0%,
    rgba(255, 126, 58, 1) 100%
  );
`;

export const CardType1 = styled.div`
  background: url(../futomaki/futo_salmon_and_asparages.jpg);
  background-position: 25% 55%;
  border-radius: 20px;
  height: 100%;
`;

export const CardType2 = styled.div`
  background: url(../hosomaki/hosomaki_tuna.jpg);
  background-position: 25% 45%;
  border-radius: 20px;
  height: 100%;
`;

export const CardType3 = styled.div`
  background: url(../nigiri/Nigiri-Tuna.jpg);
  background-position: 33% 55%;
  border-radius: 20px;
  height: 100%;
`;

export const CardType4 = styled.div`
  background: url(../sashimi/Sashimi-Tuna-Tataki.jpg);
  background-position: 25% 55%;
  border-radius: 20px;
  height: 100%;
`;

export const CardType5 = styled.div`
  background: url(../uramaki/Uramaki-Shrimp-and-Salmon.jpg);
  background-position: 30% 55%;
  border-radius: 20px;
  height: 100%;
`;

export const CardType6 = styled.div`
  background: url(../hitoshi-set.jpg);
  background-position: 30% 55%;
  border-radius: 20px;
  height: 100%;
`;
