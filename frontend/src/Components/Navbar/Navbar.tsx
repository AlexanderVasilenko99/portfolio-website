import { HashLink } from 'react-router-hash-link';
import "./Navbar.scss";

function Navbar(): JSX.Element {
    return (
        <div className="Navbar">
            <ul>
                <li><HashLink smooth to="#about">About</HashLink></li>
                <li><HashLink smooth to="#services">Services</HashLink></li>
                <li><HashLink smooth to="#portfolio">Portfolio</HashLink></li>
                <li><HashLink smooth to="#recommendations">Recommendations</HashLink></li>
                <li><HashLink smooth to="#contact">Contact</HashLink></li>
            </ul>
        </div>
    );
}

export default Navbar;
