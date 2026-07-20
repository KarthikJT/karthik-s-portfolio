import { createContext, useContext, useEffect, useState } from "react";
import { loginOwner, getMe } from "../services/api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("karthik_admin_token");
    if (!token) {
      setLoading(false);
      return;
    }
    getMe()
      .then((res) => setAdmin(res.data))
      .catch(() => localStorage.removeItem("karthik_admin_token"))
      .finally(() => setLoading(false));
  }, []);

  const login = async (email, password) => {
    const res = await loginOwner(email, password);
    localStorage.setItem("karthik_admin_token", res.data.token);
    setAdmin(res.data);
    return res.data;
  };

  const logout = () => {
    localStorage.removeItem("karthik_admin_token");
    setAdmin(null);
  };

  return (
    <AuthContext.Provider value={{ admin, loading, login, logout, isAuthenticated: !!admin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
