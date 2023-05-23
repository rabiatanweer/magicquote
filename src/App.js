import { ToastContainer } from "react-toastify";
import "./App.css";
import Routing from "./Routing/Routing";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routing />
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
