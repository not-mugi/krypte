import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@web/lib/main.css";
import { WebThemeProvider } from "../../../pkgs/web";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WebThemeProvider>
      <App />
    </WebThemeProvider>
  </StrictMode>
);
