import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FilterProvider } from "./context/filters";

ReactDOM.createRoot(document.getElementById("root")).render(
    <FilterProvider>
      <App />
    </FilterProvider>
);
