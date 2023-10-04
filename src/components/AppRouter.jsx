import React from "react";
import { Route, Routes } from "react-router-dom";
import { appRoutes } from "../router/routes";
const AppRouter = () => {
  return (
    <Routes>
      {appRoutes.map((el) => (
        <Route path={el.path} element={<el.element />} key={el.path} />
      ))}
    </Routes>
  );
};

export default AppRouter;
