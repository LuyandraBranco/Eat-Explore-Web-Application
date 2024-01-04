import { AppleLogo, GooglePlayLogo } from "phosphor-react";
import {
    Button,
  DownloadAreaContainer,
  ImageContainer,
  TextButtons,
  TextContainer,
  TextDescription,
  TextTitle,
  Image
} from "./styles";
export function DownloadArea() {
  return (
    <DownloadAreaContainer>
      <TextContainer>
        <TextTitle>
          Agora é mais fácil explorar pelo nosso aplicativo móvel
        </TextTitle>
        <TextDescription>
          A única coisa que você precisa fazer é baixar um dos melhores
          aplicativos de entrega, fazer um pedido e a maioria das empresas está
          optando pelo desenvolvimento de aplicativos móveis para entrega de
          comida.
        </TextDescription>
        <TextButtons>
            <Button><GooglePlayLogo size={22} /> Google Play</Button>
            <Button><AppleLogo size={22} /> App Store</Button>

        </TextButtons>
      </TextContainer>
      <ImageContainer>
        <Image src="./img.png"/>
      </ImageContainer>
    </DownloadAreaContainer>
  );
}
