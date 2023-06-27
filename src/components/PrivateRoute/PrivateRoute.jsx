import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedIn, getRefreshing } from "redux/auth/auth-selectors";

export const PrivateRoute = (
    { component: Component,
      redirectTo = '/ ' }
      ) => {
        const isLoggedIn = useSelector(getIsLoggedIn);
        const refreshing = useSelector(getRefreshing);
        const redirectUser = !isLoggedIn && !refreshing
        return redirectUser ? <Navigate to ={redirectTo} /> : Component;
      }