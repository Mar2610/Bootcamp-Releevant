import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../../Contexts/LoginContext";

export default function PrivateRoute() {
  const { auth } = useAuthContext();

  if (!auth) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
