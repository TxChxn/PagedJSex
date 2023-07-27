import styled from "styled-components";
import { Preview } from "../Preview";

const Header = styled.div`
  background-color: blue;
  height: 1cm;
`;

const Footer = styled.div`
  background-color: red;
`;

const Block = styled.div`
  background-color: lime;
  margin: 2mm 0;
  width: ${(props) => props.index}mm;
`;

const PAGE_CSS = `
#pdf_header {
  position: running(pdf_header);
  height: 2cm;
}

#pdf_footer {
  position: running(pdf_footer);
  height: 2cm;
}

.counter_page::after {
  content: counter(page);
}

.counter_pages::after {
  content: counter(pages);
}

@page {
  size: A4;
  margin: 2cm 0;

  @top-center {
    content: element(pdf_header);
  }
  
  @bottom-center {
    content: element(pdf_footer);
  }
}

@page:first {
  margin: 0 0 2cm 0;

  @top-center {
    content: none;
  }
}`;

export const Second = () => (
  <Preview pageCSS={PAGE_CSS}>
    <Header id="pdf_header">header</Header>
    <Footer id="pdf_footer">
      <span className="counter_page"></span>/
      <span className="counter_pages"></span>
    </Footer>
    {Array(210)
      .fill("toto")
      .map((_, i) => (
        <Block key={i} index={i + 1}>
          {i + 1}mm
        </Block>
      ))}
  </Preview>
);
