import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
export const useLogin = () => {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(null);
  const navigate = useNavigate();

  const login = async (email, password) => {
    setLoading(true);
    setError(null);


    const response = await fetch("http://localhost:4000/login", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    }
    )

    const json = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
      setLoading(false);
      navigate('/')

    }
  }
  return { login, error, isLoading };
};
