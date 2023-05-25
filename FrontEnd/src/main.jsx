import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BookContextProvider } from "./Context/Book_context.jsx";
import { AuthContextProvider } from "./Context/Auth_context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <BookContextProvider>
      <App />
    </BookContextProvider>
  </AuthContextProvider>
);
