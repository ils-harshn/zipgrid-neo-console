import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";
import { Login } from "../pages";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.LOGIN} element={<Login />} />
        <Route path="*" element={<h2>No Page Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
