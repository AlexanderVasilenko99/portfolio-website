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
                    key="phone"
                    header="Phone"
                    content="(+972)50-814-5431"
                    redirect="tel:0508145431"
                    image_name="x.png"
                />
                <ContactOption
                    key="email"
                    header="Email"
                    content="alexandervjr1@gmail.com"
                    redirect="mailto:alexandervjr1@gmail.com"
                    image_name="email_icon.png"
                />
                <ContactOption
                    key="linkedin"
                    header="LinkedIn"
                    content="alexander-vasilenko99"
                    redirect="https://www.linkedin.com/in/alexander-vasilenko99/"
                    image_name="linkedin_icon.png"
                />
            </div>
        </div>
    );
}

export default ContactMeSection;
