import React, { FC, ReactElement } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import routes from "routes";
import { Home, Login, Register } from "pages";
import { useAuth } from "hooks";

interface PrivateRouteProps {
  children: ReactElement<any, any> | null;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to={routes.login} />;
};

const router = createBrowserRouter([
  {
    path: routes.home,
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: routes.profile,
    element: (
      <PrivateRoute>
        <div>profile</div>
      </PrivateRoute>
    ),
  },
  {
    path: routes.login,
    element: <Login />,
  },
  {
    path: routes.register,
    element: <Register />,
  },
]);

export default router;
