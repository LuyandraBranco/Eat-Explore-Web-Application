import Link from "next/link";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 30rem;
  background: #101114;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    height: auto;
    padding-top: 2rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    height: auto;
    padding-top: 2rem;
  }

  @media (min-width: 681px) and (max-width: 1092px) {
  }
`;

export const FooterLogo = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #fff;

  @media (max-width: 480px) {
    height: auto;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    height: auto;
  }

  @media (min-width: 681px) and (max-width: 1092px) {
  }
`;

export const ItemContainer = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    height: auto;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    height: auto;
    flex-direction: column;
    margin-bottom: 1.2rem;
  }

  @media (min-width: 681px) and (max-width: 1092px) {
  }
`;

export const Item = styled.div`
  width: 20%;
  height: 15rem;
  margin: 0 0.5rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    width: 100%;
    height: auto;
  }

  @media (min-width: 681px) and (max-width: 1092px) {
  }
`;

export const TitleItem = styled.h4`
  color: #fff;
  font-weight: 500;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    margin-left: 5%;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    margin-left: 5%;
  }

  @media (min-width: 681px) and (max-width: 1092px) {
  }
`;

export const NavLink = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const NavItem = styled.li`
  color: #fff;
  margin-bottom: 1rem;

  @media (max-width: 680px) {
    margin-left: 5%;
  }

  @media (min-width: 681px) and (max-width: 1092px) {
  }

`;

export const SpaceLogo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    margin-top: 1rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    margin-top: 1.1rem;
  }

  @media (min-width: 681px) and (max-width: 1092px) {
  }

`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  color: #fff;

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    font-size: 1.1rem;
  }

  @media (min-width: 681px) and (max-width: 1092px) {
  }

`;

export const Slogan = styled.p`
  color: #fff;

  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    margin-bottom: 1rem;
  }

  @media (min-width: 681px) and (max-width: 1092px) {
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;
