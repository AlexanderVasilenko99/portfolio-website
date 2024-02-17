import "./ContactMeSection.scss";
import ContactOption from "./ContactOption/ContactOption";

function ContactMeSection(): JSX.Element {
    return (
        <div className="ContactMeSection">
            <div className="left-col">
                <p className="reach-out">
                    Reach out today to make your dream website come true.
                </p>
                <hr />
            </div>
            <div className="right-col">
                <ContactOption
                    key="email"
                    header="Email"
                    content="alexandervjr1@gmail.com"
                    image_name="email_icon.png"
                />
            </div>
        </div>
    );
}

export default ContactMeSection;
