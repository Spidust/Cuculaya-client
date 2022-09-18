import "../dist/output.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import general components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//HomePage
import HomePage from "./components/HomePage/HomePage";


function App() {
  return <div className="app w-screen h-screen bg-neutral-700">
    <Navbar></Navbar>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </Router>

    <Footer></Footer>

  </div>;
}

export default App;
