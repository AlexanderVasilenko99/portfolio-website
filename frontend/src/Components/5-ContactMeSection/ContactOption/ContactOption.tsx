import ContactOptionModel from "../../../Models/ContactOptionModel";
import "./ContactOption.scss";

function ContactOption(props: ContactOptionModel): JSX.Element {
    return (
        <div className="ContactOption">
            <div className="image-container">
                <img src={require(`../../../Assets/Images/${props.image_name}`)} alt="image_broken" />
            </div>
            <div className="header-content-container">
                <div className="header">
                    {props.header}
                </div>
                <div className="content">
                    {props.content}
                </div>
            </div>
        </div>
    );
}

export default ContactOption;
