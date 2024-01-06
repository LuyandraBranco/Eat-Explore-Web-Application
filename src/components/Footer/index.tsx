import { Pizza } from "phosphor-react";
import {
  FooterContainer,
  FooterLogo,
  ItemContainer,
  Logo,
  SpaceLogo,
  Item,
  Slogan,
  TitleItem,
  NavLink,
  NavItem,
  StyledLink,
} from "./styles";

export function Footer() {
  return (
    <FooterContainer>
      <ItemContainer>
        <Item>
          <TitleItem>Eat Explore</TitleItem>
          <NavLink>
            <NavItem><StyledLink href="/">Home</StyledLink></NavItem>
            <NavItem><StyledLink href="/search">Explorar</StyledLink></NavItem>
            <NavItem><StyledLink href="/about">Sobre nós</StyledLink></NavItem>
          </NavLink>
        </Item>

        <Item>
          <TitleItem>Seja nosso parceiro</TitleItem>
          <NavLink>
            <NavItem><StyledLink href="/signUp">Cadastre a sua empresa</StyledLink></NavItem>
            <NavItem>Explorar</NavItem>
            <NavItem>Sobre nós</NavItem>
            <NavItem>Contactos</NavItem>
          </NavLink>
        </Item>

        <Item>
          <TitleItem>Eat Explore</TitleItem>
          <NavLink>
            <NavItem>Home</NavItem>
            <NavItem>Explorar</NavItem>
            <NavItem>Sobre nós</NavItem>
          </NavLink>
        </Item>

        <Item>
          <TitleItem>Um pouco mais sobre nós</TitleItem>
          <NavLink>
            <NavItem>FAQ</NavItem>
            <NavItem><StyledLink href="/contact">Contactos</StyledLink></NavItem>
          </NavLink>
        </Item>

      </ItemContainer>
      <FooterLogo>
        <SpaceLogo>
          <Pizza size={32} color="#fff" />
          <Logo>Eat Explore</Logo>
        </SpaceLogo>
        <Slogan>Todos os direitos reservados. Eat Explore 2024</Slogan>
      </FooterLogo>
    </FooterContainer>
  );
}
