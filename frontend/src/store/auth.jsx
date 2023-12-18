import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
const [token , setToken]=useState(localStorage.getItem('token'))

  // Define your authentication state, functions, or values here
  const storetokenInls = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  ///LoggodIn 

  let isLoggedIn=!! token


  ///Logout Your  

  const LogoutUser=()=>{
setToken("")
return localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{ storetokenInls ,LogoutUser , isLoggedIn}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);

  if (!authContextValue) {
    throw new Error("useAuth must be used within the AuthProvider");
  }

  return authContextValue;
};
