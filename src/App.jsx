import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import general components
import Navbar from "./components/Navbar";

//HomePage
import HomePage from "./components/HomePage/HomePage";


function App() {
  return <div className="app bg-stone-700">
    <Navbar></Navbar>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </Router>
  </div>;
}

export default App;
