import axios from "axios";
import { createContext, useState } from "react";



axios.defaults.baseURL = 'http://127.0.0.1:8000/'

export const AuthContext = createContext()


export default function AuthProvider({children}) {

    const [loading, setLoading] = useState(false)


    const onLogin = async (email, password) => {
        const data = {
            email,
            password
        }
        setLoading(true)
        console.log('Login Data:', data);
        await axios.post('/auth/token/login/', data)
        .then((response)=>{
            console.log(response)
            localStorage.setItem('auth_token', response.data.auth_token)
            localStorage.setItem('isAuthenticated', true)
        })
        .catch((error) => {
            console.log(error)
        })
        setLoading(false)
    
    }
    
    const onRegister = async (email, password, re_password) => {
        setLoading(true);
        const data = {
            email,
            password,
            re_password
        };
    
        try {
            const response = await axios.post('/auth/users/', data);
            console.log('Registration successful:', response.data);
        } catch (error) {
            if (error.response) {
                // Log the error response from the server to see what's wrong with the data
                console.log('Error response:', error.response.data);
            } else if (error.request) {
                // No response received from server
                console.log('Error request:', error.request);
            } else {
                // Other errors
                console.log('Error message:', error.message);
            }
        } finally {
            setLoading(false);
        }
    };
    
    
    const onLogout = async() => {
        await localStorage.removeItem('auth_token')
        await localStorage.removeItem('isAuthenticated')
    
    } 

  return (
   <AuthContext.Provider
   value={{
    onLogin,
    onRegister,
    onLogout,
    loading
   }}
   >
    {children}
   </AuthContext.Provider>
  )
}
