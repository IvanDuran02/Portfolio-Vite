import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./screens/Home";
import { Loading } from "./screens/Loading";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
