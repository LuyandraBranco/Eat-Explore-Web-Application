import styled from "styled-components";

export const FormContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  margin-left: 5%;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-top: 1rem;
  color: #e5383b;
`;

export const ButtonTitle = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  background: var(--white);
  border: 1px solid var(--gray-600);
  border-radius: 6px;
  margin-right: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  > svg {
    color: var(--gray-600);
  }
`;

export const FormComponent = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FirstInputs = styled.div`
  display: flex;
  gap: 0.9rem;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  color: var(--slate-900);
  font-weight: 500;
  margin-left: 5%;
  margin-bottom: 0.5rem;
`;

export const Label2 = styled.label`
  font-size: 0.875rem;
  color: var(--slate-900);
  font-weight: 500;
  margin-bottom: 0.5rem;
  margin-left: 0.1rem;
`;

export const TextArea = styled.textarea`
  width: 80%;
  height: 15rem;
  border-radius: 6px;
  border: 1px solid #111;
  margin-left: 5%;
  margin-bottom: 0.5rem;
`;

export const InputElement = styled.input`
  width: 40%;
  height: 2.5rem;
  border-radius: 6px;
  border: 1px solid #ddd;
  margin-bottom: 0.5rem;
  margin-left: 1.75rem;
`;

export const InputSecound = styled.input`
  width: 20.375rem;
  height: 2.5rem;
  border-radius: 6px;
  border: 1px solid #ddd;
  margin-bottom: 0.5rem;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  height: 3rem;
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
  & > :first-child {
    margin-left: 1.75rem;
  }
`;

export const Button = styled.button`
  width: 80%;
  height: 3rem;
  border: none;
  margin-left: 5%;
  background: var(--white);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #e5383b;
  margin-top: 3rem;
  margin-bottom: 5rem;
`;

export const Input = styled.input`
  width: 80%;
  height: 2.5rem;
  border-radius: 6px;
  border: 1px solid #101114;
  margin-left: 5%;
  margin-bottom: 0.5rem;
`;

export const Select = styled.select`
  width: 80%;
  height: 2.5rem;
  border-radius: 6px;
  border: 1px solid #101114;
  margin-left: 5%;
  margin-bottom: 0.5rem;
`;

export const Option = styled.option``;
