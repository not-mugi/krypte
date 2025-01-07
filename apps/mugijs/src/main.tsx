import App from "./App.tsx";
import "@mugijs/web/styles.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WebThemeProvider } from "@mugijs/web";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WebThemeProvider>
      <App />
    </WebThemeProvider>
  </StrictMode>
);
