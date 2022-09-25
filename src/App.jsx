//Import general components
import Navbar from "./components/Navbar";

//HomePage
import HomePage from "./components/HomePage/HomePage";

//Login/Register
import Login from "./components/Login.Register/Login";
import Logout from "./components/Login.Register/Logout";
import Register from "./components/Login.Register/Register";

//Profile
import Profile from "./components/Profile/Profile";

//Routes
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UnPrivateRoute from "./components/Routes/UnPrivateRoute";
import PrivateRoute from "./components/Routes/PrivateRoute";
import { AuthContextProvider } from "./contexts/AuthContext";
function App() {
  return (
    <div className="app">
      <>
        <AuthContextProvider>
          <BrowserRouter>
            <Navbar></Navbar>
            <UnPrivateRoute path="login">
              <Login />
            </UnPrivateRoute>
            <UnPrivateRoute path="register">
              <Register />
            </UnPrivateRoute>

            <PrivateRoute path="profile">
              <Profile></Profile>
            </PrivateRoute>

            <PrivateRoute path="logout">
              <Logout></Logout>
            </PrivateRoute>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
            </Routes>

          </BrowserRouter>
        </AuthContextProvider>
      </>
    </div>
  );
}

export default App;
