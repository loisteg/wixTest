import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { App } from "./src/App";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root")
);
