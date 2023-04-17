import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { authSelectors } from "redux/auth/auth-selectors"


//  PrivateRoute повинен повторювати API Route
// Він повинен рендерити Route
// - Якщо маршрут приватний и користувач залогінений, рендеримо компонент 
// - В іншому випадку рендеримо Redirect на redirectTo
export const PrivateRoute = ({component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
    
    return isLoggedIn ? Component : <Navigate to={redirectTo} />;
 };
