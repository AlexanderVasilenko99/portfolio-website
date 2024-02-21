import ServiceOptionModel from "../../../Models/ServiceOptionModel";
import "./Service.scss";

function Service(props: ServiceOptionModel): JSX.Element {
    return (
        <div className="Service">
            <img src={require(`../../../Assets/Images/${props.image_name}`)} className="service-image" />
            <h3>{props.header}</h3>
            <hr />
            <p>{props.content}</p>
            <div className="service-icon-container">
                <img src={require(`../../../Assets/Images/${props.icon_image_name}`)} className="service-icon" />
                <p>Read more</p>
            </div>
        </div>
    );
}

export default Service;
