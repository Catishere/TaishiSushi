import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Container = styled.div`
  position: relative;
  z-index: 999;
  display: flex;
  flex-wrap: nowrap;
  padding: 0 5px;
  flex-direction: row;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  backdrop-filter: blur(5px);

  @media only screen and (max-width: 520px) {
    flex-direction: column;
  }
`;

export const Nav = styled.nav`
  flex: 2;
  margin-top: 10px;
  padding: 0 5px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  @media only screen and (max-width: 520px) {
    flex-direction: column;
  }
`;

export const NavUser = styled.nav`
  flex: 1;
  margin-top: 10px;
  display: flex;
  padding: 0 5px;
  flex-wrap: nowrap;
  justify-content: center;
  @media only screen and (max-width: 520px) {
    flex-direction: column;
  }
`;

export const NavLogo = styled.nav`
  flex: 1;
  display: flex;
  padding: 0 5px;
  flex-wrap: nowrap;
  justify-content: left;
`;

export const NavLink = styled(Link)`
  color: #e1b486;

  font-style: light;
  font-weight: normal;
  font-size: 0.8rem;
  margin: 10px;
  text-decoration: none;
  cursor: pointer;
  height: 50px;
`;

export const logo = styled(Link)`
  width: 152px;
  height: 60.27px;
  cursor: pointer;
`;

export const IconCart = styled.i`
  color: white;
`;
