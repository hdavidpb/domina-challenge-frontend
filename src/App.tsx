import { useDispatch } from "react-redux";

import { useEffect } from "react";
import { verifyUser } from "./services/verifySesion/verifyUser";
import { setIsAuth } from "./context/redux/features/auth/authSlice";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    verifyUser().then((res) => {
      if (res) {
        dispatch(setIsAuth(res));
      } else {
        dispatch(setIsAuth({ isAuthenticated: res!, userName: "" }));
      }
    });

    return () => {};
  }, []);

  return <AppRoutes />;
}

export default App;
