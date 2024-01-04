import { useEffect, useState } from "react";
import {
  HeroContainer,
  ImageContainer,
  SlideshowContainer,
  Image,
  TextContainer,
  LeftButton,
  RightButton,
  Title,
  Description,
  ButtonsContainer,
  ButtonType,
  Information,
  Styled,
  MediaContainer,
  SocialMedia,
  ButtonMedia,
} from "./styles";
import { ArrowLeft, ArrowRight, FacebookLogo, TiktokLogo, InstagramLogo } from "phosphor-react";

interface SlideshowProps {
  data: { image: string; title: string; description: string }[];
}

export function Hero({ data }: SlideshowProps) {
  // const { t } = useTranslation();

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  useEffect(() => {
    // Função para avançar automaticamente os slides a cada 2 segundos
    const autoSlide = () => {
      nextSlide();
    };

    const intervalId = setInterval(autoSlide, 8000);

    // Limpa o intervalo quando o componente for desmontado
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, data]); // Adicione currentIndex e data como dependências

  return (
    <HeroContainer>
      <LeftButton onClick={prevSlide}>
        <ArrowLeft />
      </LeftButton>
      <SlideshowContainer>
        <TextContainer>
          <Information>
            <Title>{data[currentIndex].title}</Title>
            <Description>{data[currentIndex].description}</Description>
          </Information>
          <MediaContainer>
            <SocialMedia href="#">
              <ButtonMedia>
                <FacebookLogo size={24} />
              </ButtonMedia>
            </SocialMedia>
            <SocialMedia href="#">
              <ButtonMedia>
                <InstagramLogo size={24} />
              </ButtonMedia>
            </SocialMedia>
            <SocialMedia href="#">
              <ButtonMedia>
                <TiktokLogo size={24} />
              </ButtonMedia>
            </SocialMedia>
          </MediaContainer>
        </TextContainer>
        <ImageContainer>
          <Image
            src={data[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
          />
        </ImageContainer>
      </SlideshowContainer>
      <RightButton onClick={nextSlide}>
        <ArrowRight />
      </RightButton>
    </HeroContainer>
  );
}
