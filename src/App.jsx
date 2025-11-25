import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/index";
import NotFound from "./pages/NotFound";

// React Tooltip
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

// Global Pac-Man roaming component
import GlobalPacman from "./components/GlobalPacman";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Global Roaming Pac-Man */}
      <GlobalPacman />

      {/* Toast Notifications */}
      <ToastContainer
        theme="dark"
        position="top-right"
        autoClose={2000}
        closeOnClick
        pauseOnHover={false}
        draggable={false}
      />

      {/* React Global Tooltip Component */}
      <Tooltip id="global-tooltip" className="pixel-shadow-md  text-sm" />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
