import { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext();

function getStoredUser() {
  const storedUser = localStorage.getItem('usuario');

  if (!storedUser) {
    return null;
  }

  try {
    return JSON.parse(storedUser);
  } catch (error) {
    localStorage.removeItem('usuario');
    return null;
  }
}

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [usuario, setUsuario] = useState(getStoredUser);

  const login = (newToken, user) => {
    localStorage.setItem('token', newToken);
    localStorage.setItem('usuario', JSON.stringify(user));
    setToken(newToken);
    setUsuario(user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    setToken('');
    setUsuario(null);
  };

  const value = useMemo(() => ({
    token,
    usuario,
    isLoggedIn: Boolean(token),
    isAdmin: usuario?.rol === 'admin',
    login,
    logout
  }), [token, usuario]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
};
