"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ContainerFavorite, Description, Image, ImageContainer, ItemContainer } from "@/styles/Favorite";


export default function Favorite() {
  return (
    <>
      <Header />
      <ContainerFavorite>
        <ItemContainer>
          <ImageContainer>
            <Image src="/favorite.png"/>
          </ImageContainer>
          <Description>Infelizmente ainda encontras-te sem lugares e comidas favoritas marcados</Description>
        </ItemContainer>
      </ContainerFavorite>
      <Footer />
    </>
  );
}
