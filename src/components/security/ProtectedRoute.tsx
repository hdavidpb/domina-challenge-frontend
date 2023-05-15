import { Navigate, Outlet } from "react-router-dom";

interface Props {
  children?: JSX.Element;
  isAllowed: boolean | null;
  redirectTo?: string;
}

export const ProtectedRoute = ({ children, isAllowed, redirectTo }: Props) => {
  if (isAllowed === false) {
    return <Navigate to={redirectTo ?? "/auth/login"} />;
  }

  return children ? children : <Outlet />;
};
