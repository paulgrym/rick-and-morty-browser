import { ButtonLink, Wrapper, Image, Info, Message } from "./styled";
import image from "./error.png";

export const Error = () => (
  <Wrapper>
    <Image src={image} />
    <Info>Oooops! Something went wrong…</Info>
    <Message>Please check your network connection and try again</Message>
    <ButtonLink to="/">Back to home page</ButtonLink>
  </Wrapper>
);
