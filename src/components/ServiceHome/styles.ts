import styled from "styled-components";

export const ServiceContainer = styled.section`
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: #f55f5f;
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  text-align: center;
`;

export const ItemsContainer = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

export const TitleItem = styled.h3`
  color: #e5383b;
  margin: 0 2rem;
  margin-bottom: 0.5rem;
`;

export const DescriptionItem = styled.p`
  text-align: justify;
  margin: 0 2rem;
`;
