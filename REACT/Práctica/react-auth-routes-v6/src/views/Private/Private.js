import { Link } from "react-router-dom";
import { LOGOUT } from "../../config/routes/paths";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Private() {
    const {logout} = useAuthContext();
    return (
    <div>
        <h1>Mi ruta privada</h1>
        <Link to={LOGOUT}>Cerrar sesión</Link>
        <button onClick={logout}>Logout</button>
    </div>
    
)}