import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginLayout } from "../components/layouts/LoginLayout";
import { ProtectedRoute } from "../components/security/ProtectedRoute";
import { TasksManagerPage, LoginPage, RegisterPage } from "../pages";
import { useSelector } from "react-redux";
import { RootState } from "../context/redux/store";

export const AppRoutes = () => {
  const { isAuth } = useSelector((store: RootState) => store.auth);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isAllowed={isAuth}>
              <TasksManagerPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/auth/*"
          element={
            <ProtectedRoute isAllowed={!isAuth} redirectTo="/">
              <LoginLayout />
            </ProtectedRoute>
          }
        >
          <Route index path="login" element={<LoginPage />} />
          <Route index path="register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/auth/login" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
