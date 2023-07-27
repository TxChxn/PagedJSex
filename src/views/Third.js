import styled from "styled-components";
import { Preview } from "../Preview";

const Header = styled.div`
  background-color: orange;
  height: 2cm;
`;

const Footer = styled.div`
  background-color: pink;
  height: 2cm;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  line-height: 8mm;
  margin: 0;
  padding: 0;
  border: 0;
`;

const THead = styled.thead`
  margin: 0;
  padding: 0;
  border-collapse: collapse;
  line-height: 8mm;
  border: 0;
`;

const TBody = styled.tbody`
  margin: 0;
  padding: 0;
  border-collapse: collapse;
  line-height: 8mm;
  border: 0;
`;

const Line = styled.tr`
  break-inside: avoid;
  margin: 0;
  padding: 0;
  border-collapse: collapse;
  line-height: 8mm;
  border: 0;
`;

const Cell = styled.td`
  background: ${(props) => (props.index % 2 ? "gray" : "pink")};
  padding: 0; /* trick to avoid cell resize when zooming/priting in Chrome */
  margin: 0;
  border: 1px solid red;
  line-height: 8mm;
  border-collapse: collapse;
`;

const CellHeader = styled.th`
  padding: 0; /* trick to avoid cell resize when zooming/priting in Chrome */
  margin: 0;
  border: 1px solid red;
  line-height: 8mm;
  border-collapse: collapse;
  background: black;
  color: white;
`;

const Test = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => props.index}cm;
  height: ${(props) => 3 * props.index}cm;
  width: 1mm;
  background: lime;
`;

export const Third = () => (
  <Preview>
    <Header id="pdf_header">header</Header>
    <Footer id="pdf_footer">
      <span className="counter_page"></span>/
      <span className="counter_pages"></span>
    </Footer>
    {Array(14)
      .fill(true)
      .map((_, i) => (
        <Test key={i} index={i} />
      ))}
    <Table>
      <THead>
        <CellHeader>
          <div>test</div>
        </CellHeader>
      </THead>
      <TBody>
        {Array(100)
          .fill(true)
          .map((_, i) => (
            <Line key={i}>
              <Cell index={i}>
                <div>{i}</div>
              </Cell>
            </Line>
          ))}
      </TBody>
    </Table>
  </Preview>
);
