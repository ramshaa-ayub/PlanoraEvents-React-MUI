import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#b42576",
    },
    secondary: {
      main: "#B5179E",
    },
    background: {
      default: "#1B102B",
      paper: "#2A143D",
    },
    text: {
      primary: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h4: {
      fontFamily: "Playfair Display, serif",
    },
    h6: {
      fontFamily: "Playfair Display, serif",
    },
  },
});

export default theme;
