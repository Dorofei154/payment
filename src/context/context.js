import React from 'react';

export const LoginContextValues = {
  handleRegistration: (email, password) => {},
  handleLogin: (email, password) => {},
  handleLogout: () => {},
  useAuth: () => null
};

export const LoginContext = React.createContext(LoginContextValues);