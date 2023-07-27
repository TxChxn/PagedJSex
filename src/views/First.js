import styled from "styled-components";
import { Preview } from "../Preview";

const Header = styled.div`
  background-color: purple;
`;

const Footer = styled.div`
  background-color: cyan;
`;

const Block = styled.div`
  background-color: yellow;
  margin: 10px 0;
`;

export const First = () => (
  <Preview>
    <Header id="pdf_header">header</Header>
    <Footer id="pdf_footer">
      <span className="counter_page"></span>/
      <span className="counter_pages"></span>
    </Footer>
    {Array(100)
      .fill("toto")
      .map((_, i) => (
        <Block key={i}>asticot</Block>
      ))}
  </Preview>
);
