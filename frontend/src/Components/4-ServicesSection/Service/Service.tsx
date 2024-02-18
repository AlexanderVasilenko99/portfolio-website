import ServiceOptionModel from "../../../Models/ServiceOptionModel";
import "./Service.scss";

function Service(props: ServiceOptionModel): JSX.Element {
    return (
        <div className="Service">
            <img src={require(`../../../Assets/Images/${props.image_name}`)} />
            <h3>{props.header}</h3>
            <hr />
            <p>{props.content}</p>
        </div>
    );
}

export default Service;
