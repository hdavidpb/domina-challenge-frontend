import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { Toaster } from "react-hot-toast";

import "./index.css";
import { lightTheme } from "./themes/";
import { store } from "./context/redux/store.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={lightTheme}>
    <Provider store={store}>
      <CssBaseline />
      <App />
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
    </Provider>
  </ThemeProvider>
);
