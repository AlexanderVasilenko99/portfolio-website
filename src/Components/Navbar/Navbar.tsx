import { HashLink } from 'react-router-hash-link';
import "./Navbar.scss";
import logo from '../../Assets/Images/logo3.png';
import { useEffect, useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';


function Navbar(): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('scroll', () => toggleNavbarVisibility());
        function toggleNavbarVisibility(): void {
            const navDiv = document.querySelector('#navbar') as HTMLDivElement;
            if (window.scrollY > 20) navDiv.style.top = '0px'; // show navbar
            else if (window.scrollY == 0) navDiv.style.top = '-83px'; // hide navbar
        }
        return window.removeEventListener('scroll', toggleNavbarVisibility);
    }, []);
    return (
        <div className="Navbar" id='navbar'>
            <ul>
                <li className='mobile-trigger' onClick={() => setIsOpen(!isOpen)}>
                    <a className='hamburger-menu'>
                        <Hamburger />
                    </a>
                </li>
                <li className='mobile-logo'><HashLink smooth to="/#"><img src={logo} /></HashLink></li>
                <li className={`item ${isOpen ? "is-open" : ""}`}>
                    <ul className='inner-ul'>
                        <li className='inner-li'>
                            <HashLink smooth to="#about">About</HashLink>
                            <HashLink smooth to="#services">Services</HashLink>
                            <HashLink smooth to="#portfolio">Portfolio</HashLink>
                            <HashLink smooth to="/#" className='desktop-logo'><img src={logo} /></HashLink>
                            <HashLink smooth to="#recommendations">Recommendations</HashLink>
                            <HashLink smooth to="#contact">Contact</HashLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
