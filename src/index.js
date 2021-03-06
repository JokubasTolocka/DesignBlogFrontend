import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./fonts/helvetica.ttf";
import { ApolloProvider } from "@apollo/client";
import App from "./App";
import client from "./apolloClient";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
