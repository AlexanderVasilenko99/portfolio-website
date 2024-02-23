import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar(): JSX.Element {
    return (
        <div className="Navbar">
            <ul>
                <li><NavLink to='#'>About</NavLink></li>
                <li><NavLink to='#'>Services</NavLink></li>
                <li><NavLink to='#'>Portfolio</NavLink></li>
                <li><NavLink to='#'>Recommendations</NavLink></li>
                <li><NavLink to='#'>Contact</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;
