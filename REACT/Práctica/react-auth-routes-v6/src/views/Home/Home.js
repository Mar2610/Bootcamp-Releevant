import {Link} from "react-router-dom";
import {LOGIN} from "../../config/routes/paths";

export default function Home() {
    return (
    <div>
        <h1>The party is coming!</h1>
        <Link to={LOGIN}>Iniciar sesión</Link>
    </div>
    
)}