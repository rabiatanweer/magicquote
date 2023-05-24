import { ToastContainer } from "react-toastify";
import "./App.css";
import Path from "./Routing/Path";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Path />
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
