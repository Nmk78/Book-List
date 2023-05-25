import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";


export const useRegister = () => {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(null);
  const navigate = useNavigate();

  const register = async (email, password) => {
    setLoading(true);
    setError(null);

    const response = await fetch("http://localhost:4000/register", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })

    const json = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json }); ///Automatically sigin when we sign up so there is no register in dispatch
      setLoading(false);
      navigate("/");
    }
  }
  return { register, error, isLoading };
};
