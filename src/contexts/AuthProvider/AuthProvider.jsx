import React, { createContext } from 'react';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const user = { displayName: 'Batas Ali' };
    const myInfo = { user }
    return (
        <AuthContext.Provider value={myInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;