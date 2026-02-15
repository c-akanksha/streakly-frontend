import React, { createContext, useState, useMemo, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./index";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function CustomThemeProvider({ children }) {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode");
    if (savedMode === "light" || savedMode === "dark") {
      setMode(savedMode);
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, []);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => {
          const newMode = prev === "light" ? "dark" : "light";
          localStorage.setItem("themeMode", newMode); 
          return newMode;
        });
      },
      setColorMode: (newMode) => {
        if (newMode === "light" || newMode === "dark") {
          localStorage.setItem("themeMode", newMode); 
          setMode(newMode);
        }
      },
    }),
    [],
  );

  const theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
