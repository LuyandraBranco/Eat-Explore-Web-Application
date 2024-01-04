"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SearchComponent } from "@/components/SearchComponent";
import { AboutContainer, AboutTitle, InformationContainer, LogoContainer } from "@/styles/About";

export default function About() {
  return (
    <>
      <Header />
      <AboutContainer>
        <LogoContainer>
          <AboutTitle>SOBRE NÓS</AboutTitle>
        </LogoContainer>
      </AboutContainer>
      <InformationContainer></InformationContainer>
      <Footer />
    </>
  );
}
