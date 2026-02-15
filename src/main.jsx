import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/index.js";
import { BrowserRouter } from "react-router-dom";
import CustomThemeProvider from "./theme/ThemeContext.jsx";
import { CssBaseline } from "@mui/material";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CustomThemeProvider>
        <CssBaseline />
        <BrowserRouter basename="/streakly">
          <App />
        </BrowserRouter>
      </CustomThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
