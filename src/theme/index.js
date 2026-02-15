import { createTheme } from "@mui/material/styles";

const baseTypography = {
  fontFamily: "'Poppins', sans-serif",
  h1: { fontFamily: "'Fredoka', sans-serif", fontSize: "3rem" },
  h2: { fontFamily: "'Fredoka', sans-serif", fontSize: "2.25rem" },
  h3: { fontFamily: "'Fredoka', sans-serif", fontSize: "1.75rem" },
  h4: { fontFamily: "'Fredoka', sans-serif" },
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#8A4FFF", 
    },
    secondary: {
      main: "#FF62E0", 
    },
    background: {
      default: "#FFF9F5",
      paper: "#FFFFFF", 
    },
    text: {
      primary: "#1A1F36", 
      secondary: "#5E5E7E",
    },
  },
  typography: baseTypography,
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#BB86FC",
    },
    secondary: {
      main: "#FF79B0",
    },
    background: {
      default: "#0E0E10", 
      paper: "#1D1F29",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#CFCFCF",
    },
  },
  typography: baseTypography,
});
