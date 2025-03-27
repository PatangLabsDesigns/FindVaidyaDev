// src/theme/muiTheme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#eff8ff",
      main: "#069bf1",
      dark: "#084572",
    },
    text: {
      primary: "#042033",
      secondary: "#111827",
      disabled: "#6b7280",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: '"DM Sans", sans-serif',
    h1: {
      fontFamily: '"Darker Grotesque", serif',
      fontWeight: 700,
      fontSize: "4.5rem",
      lineHeight: 1,
    },
    h2: {
      fontFamily: '"Darker Grotesque", serif',
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1,
    },
    h3: {
      fontFamily: '"Darker Grotesque", serif',
      fontWeight: 700,
      fontSize: "2.25rem",
      lineHeight: 1.11,
    },
    h4: {
      fontFamily: '"Darker Grotesque", serif',
      fontWeight: 700,
      fontSize: "1.875rem",
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: '"Darker Grotesque", serif',
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: 1.33,
    },
    body1: {
      fontFamily: '"DM Sans", sans-serif',
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      fontFamily: '"DM Sans", sans-serif',
      fontSize: "0.875rem",
      lineHeight: 1.25,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Darker+Grotesque:wght@700&display=swap');
      `,
    },
  },
});

export default theme;
