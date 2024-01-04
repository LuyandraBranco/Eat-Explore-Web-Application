import {
    HeaderContainer,
    LogoContainer,
    Logo,
    Buttons,
    ButtonDownload,
    SpaceLogo,
    Button,
    List,
    ItemList,
    StyledLink
  } from "./styles";
  import { Pizza, Sun, Translate } from "phosphor-react";
  export function Header() {
    return (
      <HeaderContainer>
        <LogoContainer>
          <SpaceLogo>
          <Pizza size={32} color="#E5383B"/>
            <Logo>Eat Explore</Logo>
          </SpaceLogo>
        </LogoContainer>
  
        <Buttons>
          <List>
            <ItemList><StyledLink href="/">Home</StyledLink></ItemList>
            <ItemList><StyledLink href="/search">Explorar</StyledLink></ItemList>
            <ItemList><StyledLink href="/about">Sobre nós</StyledLink></ItemList>
            <ItemList><StyledLink href="/contact">Contactos</StyledLink></ItemList>
          </List>
          <Button>
            <Translate size={22} />
          </Button>
          <Button>
            <Sun size={22} />
          </Button>
          <ButtonDownload>Baixar Aplicativo</ButtonDownload>
        </Buttons>
      </HeaderContainer>
    );
  }
  