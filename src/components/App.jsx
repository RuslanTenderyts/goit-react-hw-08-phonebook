import { lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUsers } from "redux/auth/auth-operations"
import { authSelectors } from "redux/auth/auth-selectors"
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute"

const Home = lazy(() => import("page/Home"));
const Contacts = lazy(() => import("page/Contacts"));
const Login = lazy(() => import("page/Login"));
const Register = lazy(() => import("page/Register"));

export const App = () => {
  const isFetchCurrentUsers = useSelector(authSelectors.selectIsFetchCurrentUsers)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUsers());
  }, [dispatch]);

  return ( 
    !isFetchCurrentUsers && (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Register />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
      </Routes>
    )
  )
};