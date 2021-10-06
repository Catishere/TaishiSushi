import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Container = styled.div`
  position: fixed;
  z-index: 999;
  height: 60px;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);

  @media only screen and (max-width: 580px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const Nav = styled.nav`
  position: relative;
  flex: 2;
  margin-top: 10px;
  padding: 0 5px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  @media only screen and (max-width: 580px) {
    padding: 0;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const NavUser = styled.nav`
  position: relative;
  flex: 1;
  margin-top: 10px;
  display: flex;
  padding: 0 5px;
  flex-wrap: nowrap;
  justify-content: center;
  @media only screen and (max-width: 580px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const NavLogo = styled.nav`
  position: relative;
  flex: 1;
  display: flex;
  padding: 0 5px;
  flex-wrap: nowrap;
  justify-content: left;
`;

export const NavLink = styled(Link)`
  color: #e1b486;
  position: relative;
  font-style: light;
  font-weight: normal;
  font-family: Arial, sans-sarif;
  font-size: 0.8rem;
  line-height: 40px;
  height: 40px;
  padding: 0 5px;
  margin: 1px 5px;
  text-decoration: none;
  text-align: center;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  white-space: nowrap;
  hyphens: none;

  @media only screen and (max-width: 580px) {
    margin: 1px 0;
  }
`;

export const logo = styled(Link)`
  width: 152px;
  height: 60.27px;
  cursor: pointer;
`;

export const IconCart = styled.i`
  color: white;
`;
