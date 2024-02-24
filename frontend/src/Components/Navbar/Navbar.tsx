import { HashLink } from 'react-router-hash-link';
import "./Navbar.scss";
import logo from '../../Assets/Images/logo3.png';
function Navbar(): JSX.Element {
    return (
        <div className="Navbar">
            <ul>
                <li><HashLink smooth to="#about">About</HashLink></li>
                <li><HashLink smooth to="#services">Services</HashLink></li>
                <li><HashLink smooth to="#portfolio">Portfolio</HashLink></li>
                <li><HashLink smooth to="/#"><img src={logo} /></HashLink></li>
                <li><HashLink smooth to="#recommendations">Recommendations</HashLink></li>
                <li><HashLink smooth to="#contact">Contact</HashLink></li>
            </ul>
        </div>
    );
}

export default Navbar;
