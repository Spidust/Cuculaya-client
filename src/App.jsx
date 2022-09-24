import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import general components
import Navbar from "./components/Navbar";

//HomePage
import HomePage from "./components/HomePage/HomePage";

//Login/Register
import Login from "./components/Login.Register/Login";
import Register from "./components/Login.Register/Register";
import { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const [loggedIn, SetLoggedIn] = useState({});

  
  useEffect(() => {
    axios
      .post(import.meta.env.VITE_API_URL + "/api/user/parse", {
        token: localStorage.getItem("token"),
      })
      .then((data) => {
        SetLoggedIn(data.data.data)
      });
  
  }, [localStorage.getItem('token')])
  return (
    <div className="app">
      <Navbar></Navbar>
      <BrowserRouter>
        {!["USER", "ADMIN"].includes(loggedIn.role) && (
          <Routes>
            <Route path="/login" exact element={<Login />}></Route>
            <Route path="/register" exact element={<Register />}></Route>
          </Routes>)}
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
