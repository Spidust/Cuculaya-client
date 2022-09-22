import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import general components
import Navbar from "./components/Navbar";

//HomePage
import HomePage from "./components/HomePage/HomePage";

//Login/Register
import Login from "./components/Login.Register/Login";

function App() {
  return <div className="app">
    <Navbar></Navbar>
    <Router>
      <Routes>
        <Route path="/login" exact element={<Login />}></Route>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </Router>
  </div>;
}

export default App;
