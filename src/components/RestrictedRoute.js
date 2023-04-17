import { authSelectors } from "redux/auth/auth-selectors"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
    
    return isLoggedIn ? <Navigate to={redirectTo} /> : Component ;
};