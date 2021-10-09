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
  margin: 0;
  padding-top: 60px;
  background: linear-gradient(
      0deg,
      rgba(125, 56, 87, 1) 0%,
      rgba(255, 126, 58, 1) 100%
    )
    no-repeat top right;

  @media only screen and (max-width: 580px) {
    padding-top: 130px;
  }

  @media only screen and (max-width: 636px) {
    height: auto;
  }
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
  }
`;

export const CardType1 = styled(Card)`
  background: url(/futomaki/futo_salmon_and_asparages.jpg);
  background-size: cover;
`;

export const CardType2 = styled(Card)`
  background: url(/hosomaki/hosomaki_tuna.jpg);
  background-size: cover;
`;

export const CardType3 = styled(Card)`
  background: url(/nigiri/nigiri_tuna.jpg);
  background-size: cover;
`;

export const CardType4 = styled(Card)`
  background: url(/sashimi/sashimi_tuna_tataki.jpg);
  background-size: cover;
`;

export const CardType5 = styled(Card)`
  background: url(/uramaki/uramaki_shrimp_and_salmon.jpg);
  background-size: cover;
`;

export const CardType6 = styled(Card)`
  background: url(/hitoshi_set.jpg);
  background-size: cover;
`;
