import { createContext, useContext, useState, useEffect, use } from 'react';
import { isLogged, getUser } from '../lib/authHandler';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const initialLogged = isLogged();
    const initialUser = initialLogged ? getUser() : null;

    const [logged, setLogged] = useState(initialLoggedstate);
    const [user, setUser] = useState(initialUser);

    return (
        <AuthContext.Provider value={{ logged, setLogged, user, setUser }}>

            {children}

        </AuthContext.Provider>
    ) 
}

export const useAuth = () => useContext(AuthContext);

