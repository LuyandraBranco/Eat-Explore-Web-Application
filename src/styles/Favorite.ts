import styled from "styled-components";

export const ContainerFavorite = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const ItemContainer = styled(ContainerFavorite)`
  height: 30rem;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 20rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Description = styled.p`
  text-align: center;
`;
