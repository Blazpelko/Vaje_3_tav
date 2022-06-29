import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import "semantic-ui-css/semantic.min.css";

import MainMenu from "./Menu";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

//Fix ker ni hotelo prikazovati ikon
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

root.render(
  <StrictMode>
    <MainMenu />
  </StrictMode>
);
