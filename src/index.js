import React from "react";
import ReactDOM from "react-dom/client";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";
import App from "./components/App/App.jsx";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("No root element found.");

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

registerServiceWorker();
