import ReactDOM, { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css';

// Pages
import App from './App.tsx';
import Tailwind from './pages/Tailwind_Page.tsx';
import StyledComponents from './pages/StyledComponents_Page.tsx';

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tailwind" element={<Tailwind />} />
        <Route path="/styledcomponents" element={<StyledComponents />} />
      </Routes>
    </BrowserRouter>
  );
} else {
  console.error("Root element not found");
}
