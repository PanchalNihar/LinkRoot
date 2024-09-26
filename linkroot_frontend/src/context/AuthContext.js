import axios from "axios";
import { createContext, useState } from "react";

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');

  const onLogin = async (email, password) => {
    const data = {
      email,
      password,
    };
    setLoading(true);
    try {
      const response = await axios.post('/auth/token/login/', data);
      localStorage.setItem('auth_token', response.data.auth_token);
      localStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true);  // Update authentication state
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onRegister = async (email, password, re_password) => {
    setLoading(true);
    const data = {
      email,
      password,
      re_password,
    };
    try {
      await axios.post('/auth/users/', data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onLogout = async () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);  // Reset authentication state
  };

  return (
    <AuthContext.Provider
      value={{
        onLogin,
        onRegister,
        onLogout,
        isAuthenticated, // Expose the state
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}