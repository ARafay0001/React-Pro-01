import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Stair from "./components/Stair.jsx";
import { NavContextProvider } from "./Contexts/NavProvider.jsx"; // provider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
        <NavContextProvider>
      <Stair>
          <App />
      </Stair>
        </NavContextProvider>
    </BrowserRouter>
  </StrictMode>
);
