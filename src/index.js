import "./reset.css";
import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
