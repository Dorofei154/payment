import React, { useContext,useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { ROUTES } from "../../constants/routes";
import { LoginContext } from "../../context/context";

export const SubscriptionComponent = () => {
  const {handleLogout} = useContext(LoginContext);
  const {currentUser} = useLocation(state => state)
  const navigate = useNavigate();
  // useEffect(() => {
  //   if(!currentUser){navigate(ROUTES.AUTH_ROUTE)}
  // }, [currentUser]);
  return <div>Subscription

    <button onClick={() => {
      handleLogout()
      
    }} >222</button>
  </div>;
};
