import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getUserRole } from "../utils/currentUser";
import { PATH } from "../utils/path";

function RoleRoute({ children, roles }) {
  const user = getUserRole();
  console.log(user, roles);
  return !roles.length || roles.includes(user)
    ? children
    : <Navigate to="/unauthorized" replace />;
}

export default RoleRoute;
