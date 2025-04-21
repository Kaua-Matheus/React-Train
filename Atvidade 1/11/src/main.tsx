import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages Imports
import App from "./App";
import About from "./pages/About";

// Components Imports
import Navbar from "./components/Navbar";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
} else {
  console.error("Root element not found");
}
