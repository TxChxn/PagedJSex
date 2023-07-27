import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { First } from "./views/First";
import { Second } from "./views/Second";
import { Third } from "./views/Third";

const Item = styled.div`
  display: inline-block;
  margin-right: 10px;
  background: gray;
  color: white;
  padding: 10px;
`;

const OnlyScreen = styled.div`
  @media print {
    display: none;
  }
`;

const MenuItem = ({ to, children }) => (
  <Link to={to}>
    <Item>{children}</Item>
  </Link>
);

export const App = () => {
  console.log("render App");

  return (
    <>
      <OnlyScreen>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/first">First</MenuItem>
        <MenuItem to="/second">Second</MenuItem>
        <MenuItem to="/third">Third</MenuItem>
      </OnlyScreen>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="first" element={<First />} />
        <Route path="second" element={<Second />} />
        <Route path="third" element={<Third />} />
      </Routes>
    </>
  );
};
