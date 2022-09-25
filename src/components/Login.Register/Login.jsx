import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Navigate } from 'react-router-dom';
import { AuthContext } from "../../contexts/AuthContext";

function Login() {
  const [Username, SetUsername] = useState("");
  const [Password, SetPassword] = useState("");
  const [Redirect, SetRedirect] = useState(false);
  const { loginApi, authState } = useContext(AuthContext);

  if(authState.auth == true) {
    SetRedirect(true)
  }

  return (
    <div className="login container flex h-screen">
      <form className="mx-auto self-center flex flex-wrap font-bold bg-stone-500 p-4 rounded-xl">
        <h2 className="text-white font-bold text-3xl mx-auto my-10">LOGIN</h2>
        <div className="username flex w-full h-10">
          <input
            type="text"
            name="username"
            className="flex-1 p-2 rounded-md"
            placeholder="Username"
            value={Username}
            onChange={(e) => SetUsername(e.target.value)}
          />
        </div>

        <div className="password w-full my-4 flex my-5 h-10">
          <input
            type="text"
            name="password"
            className="flex-1 p-2 rounded-md"
            placeholder="Password"
            value={Password}
            onChange={(e) => SetPassword(e.target.value)}
          />
        </div>

        <button
          onClick={async (e) => {
            e.preventDefault();
            await loginApi(Username, Password)
            SetRedirect(true)
          }}
          className="text-white mx-auto rounded-md p-4 bg-orange-600 hover:bg-orange-700"
        >
          Đăng nhập
        </button>
      </form>
      {Redirect && <Navigate to="/" />}

    </div>
  );
}

export default Login;
