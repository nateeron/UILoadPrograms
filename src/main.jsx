import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <div style={{ backgroundColor: "#161616", color: "#fff" }}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
      
    </div>
);
