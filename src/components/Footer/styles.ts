import Link from "next/link";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 35rem;
  background: #101114;
  display: flex;
  flex-direction: column;
`;

export const FooterLogo = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #fff;
`;

export const ItemContainer = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.div`
  width: 20%;
  height: 15rem;
  margin: 0 0.5rem;
  display: flex;
  flex-direction: column;
  
`;

export const TitleItem = styled.h4`
  color: #fff;
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

export const NavLink = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const NavItem = styled.li`
  color: #fff;
  margin-bottom:1rem;
`;

export const SpaceLogo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  margin-bottom: 0.5rem;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  color: #fff;
`;

export const Slogan = styled.p`
  color: #fff;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;

`;
