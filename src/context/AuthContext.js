import { createContext, useState, useContext } from "react";

const LoginContext = createContext(null);

export default function AuthContext({children}) {

    const [loginUser, setLoginUser] = useState({});

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const getToken = () => localStorage.getItem("TOKEN_KEY");
    const setToken = token => localStorage.setItem("TOKEN_KEY", token);
    const removeToken = () => localStorage.removeItem("TOKEN_KEY");  

    const isAdmin = () => loginUser.roles.includes("ROLE_ADMIN");   

    const signIn = (token, user) => {           
        setToken(token);
        setLoginUser(user);
        setIsAuthenticated(true);
    }

    const signOut = () => {
        removeToken();
        setLoginUser({});
        setIsAuthenticated(false);
    }

    const getAuthHeaders = (headers = {}) => {
        return {...headers, Authorization: `Bearer ${getToken()}`}
    };

    const contextValue = {
        loginUser,
        isAuthenticated,
        isAdmin,
        getToken,
        signIn,
        signOut,
        getAuthHeaders
    };

    return (
        <LoginContext.Provider value={contextValue}>
            {children}
        </LoginContext.Provider>
    );
}

const useAuthContext = () => useContext(LoginContext);

export {useAuthContext};