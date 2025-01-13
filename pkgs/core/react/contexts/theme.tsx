import React, { createContext, useContext, useState, ReactNode } from "react";

type WebTheme = "mugi" | "light" | "dark";

interface WebThemeContextProps {
  theme: WebTheme;
  setTheme: (theme: WebTheme) => void;
}

const WebThemeContext = createContext<WebThemeContextProps | undefined>(
  undefined
);

export const WebThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<WebTheme>("light");

  const value = { theme, setTheme };

  return (
    <WebThemeContext.Provider value={value}>
      {children}
    </WebThemeContext.Provider>
  );
};

export const useTheme = (): WebThemeContextProps => {
  const context = useContext(WebThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
