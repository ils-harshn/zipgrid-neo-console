import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";
import { Login, ResetPassword } from "../pages";
import Home from "../pages/Home";
import { ProtectedRoute } from "./Middlewares";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.LOGIN} element={<Login />} />
        <Route path={routes.RESET_PASSWORD} element={<ResetPassword />} />
        <Route element={<ProtectedRoute />}>
          <Route index element={<Home />} />
          <Route path={routes.HOME} element={<Home />} />
        </Route>
        <Route path="*" element={<h2>No Page Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
