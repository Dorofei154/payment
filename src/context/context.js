import { onAuthStateChanged, User } from 'firebase/auth';
import { memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { сurrentUserCreator } from '../store/actionCreators/сurrentUserCreator';
import { auth, login, logout, signup } from '../firebase';
import { LoginContext } from './context';


function LoginProviderComponent({ children }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const setCurrentUser = useCallback(
    (e) => {
      dispatch(сurrentUserCreator(e));
    },
    [dispatch]
  );

  const useAuth = () => {
    return state.currentUser;
  };
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
    });
    return unsub;
  }, [setCurrentUser]);

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
