import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
function App() {
  return (
    <div className="text-center mt-3">
      <h1 className="Merriweathe">Selection of a bike</h1>
      <div className="mt-4">
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
