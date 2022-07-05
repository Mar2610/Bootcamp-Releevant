import { useAuthContext } from "../../Contexts/LoginContext";

export default function Profile() {
    const {auth} = useAuthContext();
  return (
  <div>
    <p>{auth.name}</p>
  </div>
  )
}
