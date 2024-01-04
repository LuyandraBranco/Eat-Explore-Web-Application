"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SearchComponent } from "@/components/SearchComponent";
import { ContactContainer, ContactTitle, InformationContainer, LogoContainer } from "@/styles/Contact";

export default function Contact() {
  return (
    <>
      <Header />
      <ContactContainer>
        <LogoContainer>
          <ContactTitle>Contactos</ContactTitle>
        </LogoContainer>
      </ContactContainer>
      <InformationContainer></InformationContainer>
      <Footer />
    </>
  );
}
