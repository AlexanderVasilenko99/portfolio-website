import { HashLink } from "react-router-hash-link";
import "./GetInTouchButton.scss";

function GetInTouchButton(): JSX.Element {
    return (
        // <div className="GetInTouchButton">
        <HashLink smooth to='#contact' className="GetInTouchButton">Get in touch!</HashLink>
        // </div>
    );
}

export default GetInTouchButton;
