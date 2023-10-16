import React from "react";
import ReactDOMClient from "react-dom/client";
import { LitmusDashboard } from "./screens/LitmusDashboard";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<LitmusDashboard />);
