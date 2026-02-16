// import React, { createContext, useContext, useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";
// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [userToken, setUserToken] = useState(null);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       setUserToken(token);
//       const decoded = jwtDecode(token);
//       setUser(decoded);
//     }
//   }, []);

//   const login = (token) => {
//     localStorage.setItem("token", token);
//     setUserToken(token);
//     const decoded = jwtDecode(token);
//     setUser(decoded);
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setUserToken(null);
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ userToken, user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);





import React, { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUserToken(token);
      const decoded = jwtDecode(token);
      setUser(decoded);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setUserToken(token);
    const decoded = jwtDecode(token);
    setUser(decoded);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUserToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ userToken, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
