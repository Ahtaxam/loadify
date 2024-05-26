import React from "react";
import { Navigate } from "react-router-dom";
import { PATH } from "../utils/path";

function ProtectedRoute({ children }) {
  const isLoggedIn = true;

  return <div>{isLoggedIn ? children : <Navigate to={PATH.LOGIN} />}</div>;
}

export default ProtectedRoute;
