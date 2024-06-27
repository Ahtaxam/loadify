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
import RoleRoute from "./RoleRoute";
import InventoryHolder from "../screens/inventory";
import LoaderDetail from "../components/loaderDetail";
import UnAuthorized from "../screens/unAuthorized";
import LoaderPersonalAdds from "../screens/myAdds/loader";
import InventoryHolderPersonalAdds from "../screens/myAdds/inventory";
import MyAdds from "../screens/myAdds";
import Chat from "../screens/chat/index";
import ActiveAdds from "../screens/activeadds/inventory";
import About from "../screens/aboutUs";
import ContactUs from "../screens/contactUs";

function AppRoute() {
  return (
    <div>
      <Routes>
        <Route path={PATH.HOME} element={<Home />} />
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.SIGNUP} element={<Signup />} />

        <Route
          path={PATH.USERSHOME}
          element={
            <ProtectedRoute>
              <HomeMain />
            </ProtectedRoute>
          }
        />
        <Route path={PATH.LOADERADDS} element={<TruckLoader />} />

        <Route path={PATH.INVENTORYDETAIL} element={<InventoryDetail />} />
        <Route path={PATH.INVENTORYADD} element={<InventoryHolder />} />

        <Route path={PATH.LOADERDETAIL} element={<LoaderDetail />} />
        <Route path={PATH.MYADDS} element={<MyAdds />} />

        <Route
          path={PATH.CHAT}
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />

        <Route
          path={PATH.ACTIVEADDS}
          element={
            <ProtectedRoute>
              <ActiveAdds />
            </ProtectedRoute>
          }
        ></Route>

        {/* <Route
          path={PATH.LOADERPERSONALADDS}
          element={
            <ProtectedRoute>
              <RoleRoute roles={['Truck Loader']}>
                <LoaderPersonalAdds />
              </RoleRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path={PATH.INVENTORYPERSONALADDS}
          element={
            <ProtectedRoute>
              <RoleRoute roles={['Inventory']}>
                <InventoryHolderPersonalAdds />
              </RoleRoute>
            </ProtectedRoute>
          }
        /> */}
        <Route path={PATH.CONTACTUS} element={<ContactUs />} />
        <Route path={PATH.ABOUTUS} element={<About />} />
        <Route path={PATH.UNAUTHORIZED} element={<UnAuthorized />} />
      </Routes>
    </div>
  );
}

export default AppRoute;
