import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FirebaseContext } from "./context/FirebaseContext.js";
import { firebase } from "./firebase/config.js";
import { ProvideAuth } from "./context/AuthContext.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <ProvideAuth>
        <App /> 
      </ProvideAuth>
    </FirebaseContext.Provider>
  </React.StrictMode>
);
