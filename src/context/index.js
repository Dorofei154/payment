import { onAuthStateChanged, User } from "firebase/auth";
import { memo, useCallback, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { ACTIONS } from "../constants/actions";
import { ROUTES } from "../constants/routes";

import { auth, login, logout, signup } from "../firebase/firebase";
import { currentUserCreator } from "../store/actionCreators/currentUserCreator";
import { LoginContext } from "./context";

function LoginProviderComponent({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const state = useSelector((state) => state);
  const setCurrentUser = useCallback((e)=>{
    dispatch(currentUserCreator(e))
  }
  ,[dispatch])

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(state.currentUser)
    });
    return unsub;
  }, [navigate, setCurrentUser, state.currentUser]);

  const handleLogin = async (email, password) => {
    try {
      await login(email, password);
    } catch (e) {
      alert("Invalid data");
    }
  };
  const handleLogout = async () => {
    try {
      await logout();
    } catch {
      alert("Logout is not available");
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
        auth,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export const LoginProvider = memo(LoginProviderComponent);
