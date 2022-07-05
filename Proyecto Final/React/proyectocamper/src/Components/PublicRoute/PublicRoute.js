import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../../Contexts/LoginContext";

export default function PublicRoute() {
  const { auth } = useAuthContext();

  if (auth) {
    return <Navigate to={"/booking"} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
