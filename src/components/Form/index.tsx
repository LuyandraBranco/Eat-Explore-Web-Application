import {
  FormContainer,
  TitleContainer,
  Title,
  ButtonTitle,
  FormComponent,
  FirstInputs,
  FormGroup,
  Label,
  Label2,
  TextArea,
  InputElement,
  InputSecound,
  ButtonsContainer,
  Button,
} from "./styles";
import { Input } from "../Input";
import { CaretUp } from "phosphor-react";
export function Form() {
  return (
    <FormContainer>
      <TitleContainer>
        <Title>Junte-se a nós e cadastre os dados do seu restaurante</Title>
      </TitleContainer>

      <FormComponent action="#">
        {/* <FirstInputs>
          <FormGroup>
            <Label>Nome</Label>
            <InputElement type="text" />
          </FormGroup>

          <FormGroup>
            <Label2>Sobrenome</Label2>
            <InputSecound type="text" />
          </FormGroup>
        </FirstInputs> */}
        <FormGroup>
          <Label>Nome do espaço (Restaurante, Bar, Roulotes)</Label>
          <Input width={"80%"} type={"text"} />
        </FormGroup>
        <FormGroup>
          <Label>Endereço</Label>
          <Input width={"80%"} type={"text"} />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input width={"80%"} type={"text"} />
        </FormGroup>
        <FormGroup>
          <Label>Telefone</Label>
          <Input width={"80%"} type={"text"} />
        </FormGroup>
        <FormGroup>
          <Label>Perfil</Label>
          <TextArea />
        </FormGroup>
        <Button type="submit">Cadastrar-se</Button>
      </FormComponent>
    </FormContainer>
  );
}
