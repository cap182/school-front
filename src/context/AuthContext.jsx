import { createContext, useContext, useState, useEffect } from "react";
import { loginRequest, registerRequest } from "../services/auth.service";

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context){
        throw new Error('Fuera del contexto')
    }
    return context;
}

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [authenticated, setAuthenticated] = useState(false)
  const [error, setError] = useState(null)

  const register = async (user) => {
    try {
      const resp = await registerRequest(user)
      console.log('register response', resp)
      
    } catch (error) {
      console.log('registerError', error);
      setError(error.response.data.error)
    }
  };

  const login = async (credentials) => {
    try {
      const resp = await loginRequest(credentials)
      setUser(resp.data)
      setAuthenticated(true)
      
    } catch (error) {
      setError(error.response.data.error)
      
    }
  }

  useEffect(()=>{
    if (error){
      const timer = setTimeout(()=>{
        setError(null)
      }, 6000)
      return () => clearTimeout(timer)
    }
  },[error])


  return <AuthContext.Provider value={{
    register,
    login,
    user,
    error,
    authenticated,
  }}>{children}</AuthContext.Provider>;
};
