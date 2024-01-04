import styled from "styled-components";

export const DownloadAreaContainer = styled.section`
  width: 100%;
  height: 25rem;
  background: #f55f5f;
  display: flex;
`;

export const TextContainer = styled.div`
  width: 50%;
  height: 25rem;
  display: flex;
  flex-direction: column;
  margin-right: 15%;
`;

export const TextTitle = styled.h1`
  color: #fff;
  margin-left: 9%;
  margin-top: 4rem;
  margin-bottom: 0.5rem;
`;

export const TextDescription = styled.p`
  margin-left: 9%;
  margin-bottom: 2rem;
  color: #000;
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
`;

export const ImageContainer = styled.div`
  width: 35%;
  height: 25rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;

  @media (max-width: 680px) {
    object-fit: contain;
  }
`;
