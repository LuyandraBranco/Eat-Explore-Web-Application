import {
  ButtonSearch,
  Description,
  InputSearch,
  SearchContainer,
  SearchingContainer,
  Title,
} from "./styles";

export function SearchComponent() {
  return (
    <SearchContainer>
      <Title>Explore uma Diversidade de Restaurantes e Sabores Únicos</Title>
      <Description>
        Encontre. Saboreie. Descubra. Uma busca intuitiva para explorar
        restaurantes e sabores personalizados ao seu alcance.
      </Description>
      <SearchingContainer>
        <InputSearch type="text" placeholder="O que está procurando hoje?" />
        <ButtonSearch>Procurar</ButtonSearch>
      </SearchingContainer>
    </SearchContainer>
  );
}
