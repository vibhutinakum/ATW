import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import AllRoutes from "./routes/AllRoutes";
function App() {
  return (
    <div className="App">
      <AllRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
