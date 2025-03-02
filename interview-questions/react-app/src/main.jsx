import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeContextProvider } from "./Theme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);
