import { Navigate, Outlet, useLocation } from "react-router-dom";

const Protected = () => {
  const auth = localStorage.getItem("token");
  const location = useLocation();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }

  return <Outlet />;
};

export default Protected;
