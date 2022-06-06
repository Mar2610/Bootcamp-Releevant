import { useUserLoginContext } from "../contexts/UserLoginContext";

export default function Welcome() {
  const { user } = useUserLoginContext();

  return <h1>Welcome {user.email}</h1>;
}
