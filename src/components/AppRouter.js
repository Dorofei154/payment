import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../router/routes";

export const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => {
        return <Route path={path} element={<Component />} key={path} />;
      })}
    </Routes>
  );
};
