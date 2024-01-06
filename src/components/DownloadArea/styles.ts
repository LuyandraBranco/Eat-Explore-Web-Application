import styled from "styled-components";

export const DownloadAreaContainer = styled.section`
  width: 100%;
  height: 25rem;
  background: #e5383b;
  display: flex;

  @media (max-width: 480px) {
    height: auto;
    flex-direction: column-reverse;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    height: auto;
    flex-direction: column-reverse;
  }
`;

export const TextContainer = styled.div`
  width: 50%;
  height: 25rem;
  display: flex;
  flex-direction: column;
  margin-right: 15%;

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    width: 100%;
    height: auto;
  }
`;

export const TextTitle = styled.h1`
  color: #fff;
  margin-left: 9%;
  margin-top: 4rem;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    font-size: 1.25rem;
  }
`;

export const TextDescription = styled.p`
  margin-left: 9%;
  margin-bottom: 2rem;
  color: #fff;
`;

export const TextButtons = styled.div`
  width: 80%;
  height: 12rem;
  margin-left: 9%;
  display: flex;
  gap: 1rem;
`;

export const Button = styled.button`
  width: 8rem;
  height: 2.5rem;
  border: none;
  background: #333;
  color: #fff;
  gap: 0.5rem;
  border-radius: 3px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  > svg {
    color: var(--gray-600);
  }

  @media (max-width: 480px) {
    width: 15rem;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    width: 14rem;
  }
`;

export const ImageContainer = styled.div`
  width: 35%;
  height: 25rem;

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }

  @media (min-width: 480px) and (max-width: 680px) {
    width: 100%;
    height: auto;
    background: #111;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;

  @media (max-width: 680px) {
    width: 100%;
    object-fit: cover;
  }
`;
