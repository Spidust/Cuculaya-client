import React from "react";
import { useState } from "react";
import axios from "axios";



function Login() {
  const [Username, SetUsername] = useState("");
  const [Password, SetPassword] = useState("");
  const [Error, SetError] = useState("");

  const loginApi = (username, password) => {
    fetch(`${import.meta.env.VITE_API_URL}/api/user/login`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.success === false) {
          return SetError(data.message);
        }
  
        localStorage.setItem("token", data.accessToken);
        return alert("logged in");
      });
  }

  return (
    <div className="login container flex h-screen">
      {Error != "" && <div className="error">{Error}</div>}
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
          onClick={(e) => {
            e.preventDefault();
            loginApi(Username, Password);
          }}
          className="text-white mx-auto rounded-md p-4 bg-orange-600 hover:bg-orange-700"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
}



export default Login;
