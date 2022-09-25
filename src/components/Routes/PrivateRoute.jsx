import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function PrivateRoute({ children, path }) {
  const { authState } = useContext(AuthContext);

  return (
    <Routes>
      {authState.auth && <Route path={path} element={children} exact></Route>}
    </Routes>
  );
}

export default PrivateRoute;
