import { HashLink } from "react-router-hash-link";
import "./FirstSection.scss";

function FirstSection(): JSX.Element {
    return (
        <div className="FirstSection" id="/#">
            <h1><span>Hello,</span> I am Alex!</h1>
            <h2>I make your dream website a reality.</h2>
            <HashLink smooth to='#contact'>Get in touch!</HashLink>
        </div >
    );
}

export default FirstSection;
