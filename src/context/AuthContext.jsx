import { createContext, useContext, useState } from "react";
import { registerRequest } from "../services/auth.service";

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context){
        throw new Error('Fuera del contexto')
    }
    return context;
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const signUp = async (user) => {
    const resp = await registerRequest(user);
    setUser(resp.data);
  };
  return <AuthContext.Provider value={{
    signUp,
    user,
  }}>{children}</AuthContext.Provider>;
};
