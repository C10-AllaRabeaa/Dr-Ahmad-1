import { Link } from "react-router-dom";
import './style.css'
const Navbar = () => {
    return (
        <div className="Nav">


            <Link className="textNav1" to="/Register">Register</Link>

            <Link className="textNav1" to="/Login">Login</Link>

            <Link className="textNav1" to="/">Home</Link>


        </div>
    )
}

export default Navbar;