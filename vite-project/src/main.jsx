import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./providers/UserContext/index.jsx";
import { TechProvider } from "./providers/TechContext/index.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="574062021494-ef5v8bhf9stg1f8ba72j8au1tp2sf9af.apps.googleusercontent.com">
    <React.StrictMode>
      <BrowserRouter>
        <UserProvider>
          <TechProvider>
            <App />
          </TechProvider>
        </UserProvider>
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
