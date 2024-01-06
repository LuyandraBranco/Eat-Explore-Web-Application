import styled from "styled-components";

export const ServiceContainer = styled.section`
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 480px) {
    height: auto;
    margin-bottom: 3rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    height: auto;
    margin-bottom: 3rem;
  }

  @media (min-width: 681px) and (max-width: 1092px) {
  }
`;

export const TextContainer = styled.div``;

export const Title = styled.h1`
  color: #f55f5f;
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  text-align: center;

  @media (max-width: 480px) {
    margin-top: 2rem;
    font-size: 1.3rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    margin-top: 2rem;
    font-size: 1.5rem;
  }

  @media (min-width: 681px) and (max-width: 1092px) {
  }
`;

export const Description = styled.p`
  text-align: center;

  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    margin-bottom: 1.2rem;
  }

  @media (min-width: 681px) and (max-width: 1092px) {
  }
`;

export const ItemsContainer = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    height: auto;
    flex-direction: column;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    height: auto;
    flex-direction: column;
  }

  @media (min-width: 681px) and (max-width: 1092px) {
  }
`;

export const Item = styled.div`
  width: 20%;
  height: 15rem;
  margin: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;

  > svg {
    margin: 0 2rem;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    color: #f55f5f;
  }

  &:hover {
    padding-bottom: 1rem;
    transition: all 0.5s;
  }

  @media (max-width: 480px) {
    width: 90%;
    height: auto;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    width: 90%;
    height: auto;
  }

  @media (min-width: 681px) and (max-width: 1092px) {
  }
`;

export const TitleItem = styled.h3`
  color: #e5383b;
  margin: 0 2rem;
  margin-bottom: 0.5rem;
`;

export const DescriptionItem = styled.p`
  text-align: justify;
  margin: 0 2rem;

  @media (max-width: 480px) {
    margin-bottom: 2rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    margin-bottom: 2rem;
  }

  @media (min-width: 681px) and (max-width: 1092px) {
  }
`;
