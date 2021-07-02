import { createContext, useState, useContext } from "react";

const LoginContext = createContext(null);

export default function AuthContext({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const contextValue = {
        isAuthenticated,
        setIsAuthenticated
    };

    return (
        <LoginContext.Provider value={contextValue}>
            {children}
        </LoginContext.Provider>
    );
}

const useAuthContext = () => useContext(LoginContext);

export {useAuthContext};