import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Do not use StrictMode because otherwise we'll have 2 renders...
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
