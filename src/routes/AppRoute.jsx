import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATH } from '../utils/path';
import Home from '../screens//landing';
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/signup';
import HomeMain from '../screens/home';
import ProtectedRoute from './ProtectedRoute';
import TruckLoader from '../screens/loader';
import InventoryDetail from '../components/inventoryDetail';
import RoleRoute from './RoleRoute';
import InventoryHolder from '../screens/inventory';
import LoaderDetail from '../components/loaderDetail';
import UnAuthorized from '../screens/unAuthorized';
import LoaderPersonalAdds from '../screens/myAdds/loader';
import InventoryHolderPersonalAdds from '../screens/myAdds/inventory';
import MyAdds from '../screens/myAdds';

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
        <Route path={PATH.MYADDS} element={<MyAdds/>} />

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

        <Route path={PATH.UNAUTHORIZED} element={<UnAuthorized />} />
      </Routes>
    </div>
  );
}

export default AppRoute;
