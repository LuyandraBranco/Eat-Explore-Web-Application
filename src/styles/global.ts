import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  
  color: ${(props) => props.theme.white};
  -webkit-font-smoothing: antialiased;
    
    /* Estilizar a barra de rolagem do corpo */
  scrollbar-width: thin; /* Para navegadores Firefox */
  scrollbar-color: ${(props) => props.theme["gray-900"]} ${(props) =>
  props.theme["gray-900"]}; /* Cor da thumb e da barra */

    /* Estilizar o thumb (indicador de posição) da barra de rolagem */
    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme["gray-900"]};
      border-radius: 6px; /* Raio para torná-lo meio redondo */
    }

    /* Estilizar a barra de rolagem */
    &::-webkit-scrollbar {
      width: 12px; /* Largura da barra de rolagem */
    }  
}

body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    scroll-behavior: smooth;
}

`;
