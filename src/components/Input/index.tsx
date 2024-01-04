import { InputContainer } from "./styles";
interface InputProps {
  width: string;
  type: string
}
export function Input({ width, type }: InputProps) {
  return <InputContainer type={type} width={width} />;
}
