import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100%;
  height: 35rem;
  background: #E5383B;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    height: 40rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    height: 44rem;
  }
`;

export const SlideshowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 92%;
  height: 30rem;

  @media (max-width: 480px) {
    width: 75%;
    height: 38rem;
    flex-direction: column-reverse;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    width: 75%;
    height: 42rem;
    flex-direction: column-reverse;
  }
`;

export const ImageContainer = styled.div`
  width: 35%;
  height: 30rem;

  @media (max-width: 480px) {
    width: 100%;
    height: 13rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    width: 100%;
    height: 20rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;

  @media (max-width: 680px) {
    object-fit: contain;
  }
`;

export const TextContainer = styled.div`
  width: 65%;
  height: 30rem;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    width: 100%;
    height: 22rem;
    justify-content: center;
    background: #E5383B;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    width: 100%;
    height: 21rem;
    justify-content: center;
    background: #E5383B;
  }
`;

export const Information = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    height: auto;
    padding-bottom: 1rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    height: auto;
    padding-bottom: 1rem;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  margin-top: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
    height: 5rem;
    margin-top: 0.5rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    flex-direction: column;
    height: 6rem;
    margin-top: 0.5rem;
  }
`;

export const ButtonType = styled.button`
  width: 14rem;
  height: 3.2rem;
  background-color:#333;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: #fff;
  margin-right: 2rem;
  border-radius: 2px;

  @media (max-width: 480px) {
    width: 9rem;
    margin-bottom: 0.5rem;
    font-size: 0.7rem;
    background-color: #e5383b
  }

  @media (min-width: 480px) and (max-width: 680px) {
    width: 13rem;
    margin-bottom: 0.4rem;
    font-size: 0.8rem;
    background-color: #e5383b;
  }

  @media (min-width: 681px) and (max-width: 1092px) {
    width: 11rem;
    font-size: 0.8rem;
    margin-right: 1rem;
    height: 2.8rem;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #fff;
  padding: 10px; /* Adicione um espaço ao redor das setas */

  &:hover {
    color: #333;
  }
`;

export const LeftButton = styled(Button)``;

export const RightButton = styled(Button)``;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-transform: uppercase;
  margin-top: 3rem;
  margin-bottom: 1rem;
  color: #fff;

  @media (max-width: 480px) {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    margin-top: 0.5rem;
    margin-bottom: 0.6rem;
    font-size: 1.2rem;
  }

  @media (min-width: 681px) and (max-width: 1092px) {
    font-size: 1.7rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  text-align: justify;
  color: #fff;

  @media (max-width: 680px) {
    font-size: 1rem;
  }

  @media (min-width: 681px) and (max-width: 1092px) {
    font-size: 1rem;
  }
`;

export const Styled = styled.a`
  text-decoration: none;
  color: #fff;
`;

export const MediaContainer = styled.div`
  width: 80%;
  height: 3rem;
  display: flex;
 

  @media (max-width: 480px) {
    width: 80%;
  }

  @media (min-width: 481px) and (max-width: 680px) {
    width: 80%;
    height: 2rem;
  }
  @media (min-width: 681px) and (max-width: 800px) {
    margin-top: 2rem;
  }

  @media (min-width: 890px) and (max-width: 1120px) {
    margin-top: 2.5rem;
  }

`;

export const SocialMedia = styled.a`
  text-decoration: none;
  color: #e5383b;
`;

export const ButtonMedia = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  margin-right: 1rem;
  border-radius: 50%;
  cursor: pointer;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    color: #e5383b;
  }
  &:hover {
    background: ${(props) => props.theme.white};
  }

  @media (max-width: 680px) {
    width: 2rem;
    height: 2rem;
  }
`;
