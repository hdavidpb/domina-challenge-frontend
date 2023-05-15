import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: { mode: "light", primary: { main: "rgb(0 72 255 / 89%)" } },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#FFF",
          textTransform: "none",
          borderRadius: "25px",
        },
      },
    },
  },
});
