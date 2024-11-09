import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { ChakraProvider, extendTheme} from "@chakra-ui/react";
import {theme as customTheme} from './theme'
const theme = extendTheme(customTheme);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider resetCSS theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
