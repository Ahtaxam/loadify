import React from "react";
import { Route, Routes } from "react-router-dom";
import { PATH } from "../utils/path";
import Home from "../screens//landing";
import Login from "../screens/auth/Login";
import Signup from "../screens/auth/signup";
import HomeMain from "../screens/home";
import ProtectedRoute from "./ProtectedRoute";
import TruckLoader from "../screens/loader";
import InventoryDetail from "../components/inventoryDetail";

function AppRoute() {
  return (
    <div>
      <Routes>
        <Route path={PATH.HOME} element={<Home />} />
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.SIGNUP} element={<Signup />} />
        <Route path={PATH.USERSHOME} element={<HomeMain />} />
        <Route
          path={PATH.LOADERADDS}
          element={
            <ProtectedRoute>
              <TruckLoader />
            </ProtectedRoute>
          }
        />

        <Route
          path={PATH.INVENTORYDETAIL}
          element={
            <ProtectedRoute>
              <InventoryDetail />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default AppRoute;
