import { createContext, useEffect, useReducer } from "react";
import { authReducer } from "../reducer/authReducer";
import axios from "axios";
import setAuthToken from "../../helper/setAuthHeader";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    isLoading: true,
    auth: false,
    user: null,
  });

  const loadUser = async () => {
      console.log(localStorage.getItem("token"))

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/user/`, {
        token: localStorage.getItem("token")
      });
      if (res.data.success) {
        dispatch({
          type: "set_auth",
          payload: {
            auth: true,
            isLoading: false,
          },
        });
      }
    } catch (res) {
      // localStorage.removeItem("token");

      console.log(res.data);
      dispatch({
        type: "set_auth",
        payload: {
          auth: false,
          isLoading: false,
        },
      });
    }
  };
  useEffect(() => {
    loadUser();
  }, []);

  const loginApi = async (username, password) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/user/login`,
        { username, password }
      );

      if (res.data.success) {
        localStorage.setItem("token", res.data.accessToken);
      }
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };

  const registerApi = async (username, password) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/user/register`,
        { username, password }
      );

      if (res.data.success) {
        localStorage.setItem("token", res.data.accessToken);
      }
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthContext.Provider value={{ loginApi, authState, dispatch, registerApi}}>{children}</AuthContext.Provider>
  );
};
