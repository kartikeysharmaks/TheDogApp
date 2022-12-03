import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Auth0Provider
    domain="dev-rmd2dhcv5qz3hgfh.us.auth0.com"
    clientId="ZvV2MkiDqd5WXyM4HRKWDe9mcu0akh3y"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
