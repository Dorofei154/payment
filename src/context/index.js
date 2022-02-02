import { onAuthStateChanged, User } from 'firebase/auth';
import { memo, useCallback, useEffect } from 'react';

import { auth, login, logout, signup } from '../firebase/firebase';
import { LoginContext } from './context';



function LoginProviderComponent({ children }) {
 


  const useAuth = () => {
    return auth;
  };


  const handleLogin = async (email, password) => {
    try {
      await login(email, password);
    } catch (e) {
      alert('Invalid data');
    }
  };
  const handleLogout = async () => {
    try {
      await logout();
    } catch {
      alert('Logout is not available');
    }
  };
  const handleRegistration = async (email, password) => {
    await signup(email, password);
  };

  return (
    <LoginContext.Provider
      value={{
        handleRegistration,
        handleLogin,
        handleLogout,
        useAuth
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export const LoginProvider = memo(LoginProviderComponent);
