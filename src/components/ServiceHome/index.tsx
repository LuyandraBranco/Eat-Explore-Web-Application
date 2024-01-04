import { Book, ForkKnife, Globe, Hamburger } from "phosphor-react";
import {
  ServiceContainer,
  TextContainer,
  Title,
  ItemsContainer,
  Description,
  Item,
  TitleItem,
  DescriptionItem,
} from "./styles";

export function ServiceHome() {
  return (
    <ServiceContainer>
      <TextContainer>
        <Title>Descubra, Reserve e Desfrute ao Máximo</Title>
        <Description>
          🌟 Bem-vindo ao Eat Explore, onde sua jornada gastronômica ganha vida!
          Seja um verdadeiro explorador de sabores! 🍽️✨
        </Description>
      </TextContainer>
      <ItemsContainer>
        <Item>
          <Hamburger size={32} />
          <TitleItem>Descubra novos sabores</TitleItem>
          <DescriptionItem>
            Explore uma variedade de restaurantes que combinam com sua
            preferência gastronômica e orçamento, filtrando por preço,
            localização e avaliações.
          </DescriptionItem>
        </Item>
        <Item>
          <Book size={32} />
          <TitleItem>Reservas Simplificadas</TitleItem>
          <DescriptionItem>
            Garanta seu lugar nos melhores locais com apenas alguns toques,
            reservando mesas de forma rápida e descomplicada.
          </DescriptionItem>
        </Item>
        <Item>
          <ForkKnife size={32} />
          <TitleItem>Entregas Deliciosas</TitleItem>
          <DescriptionItem>
            Leve os sabores dos seus restaurantes favoritos para onde quer que
            esteja. Peça suas refeições preferidas e desfrute do conforto da sua
            casa.
          </DescriptionItem>
        </Item>
        <Item>
          <Globe size={32} />
          <TitleItem>Exploração Personalizada</TitleItem>
          <DescriptionItem>
            Nossa aplicação aprende com suas escolhas, recomendando experiências
            gastronômicas ainda mais personalizadas a cada interação.
          </DescriptionItem>
        </Item>
      </ItemsContainer>
    </ServiceContainer>
  );
}
