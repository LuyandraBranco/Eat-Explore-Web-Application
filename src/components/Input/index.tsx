import { InputContainer } from "./styles";
interface InputProps {
  width: string;
  type: string;
  name: string;
}
export function Input({ width, type , name}: InputProps) {
  return <InputContainer type={type} width={width}  name={name}/>;
}
