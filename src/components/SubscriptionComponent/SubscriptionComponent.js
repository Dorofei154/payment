import React, { useContext } from "react";

import { useNavigate } from "react-router";
import { ROUTES } from "../../constants/routes";
import { LoginContext } from "../../context/context";

export const SubscriptionComponent = () => {
  const { handleLogout } = useContext(LoginContext);

  const navigate = useNavigate();

  return (
    <div>
      Subscription
      <button
        onClick={() => {
          navigate(ROUTES.AUTH_ROUTE);
          handleLogout();
        }}
      >
        222
      </button>
    </div>
  );
};
