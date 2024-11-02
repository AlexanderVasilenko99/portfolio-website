import { HashLink } from "react-router-hash-link";
import ServiceOptionModel from "../../../Models/ServiceOptionModel";
import "./Service.scss";
import { useInView } from "react-intersection-observer";

function Service(props: ServiceOptionModel): JSX.Element {
    const [serviceInViewRef, serviceInView] = useInView({ triggerOnce: true })

    return (
        <div className={`Service ${props.id % 2 == 0 ? "even" : "odd"} ${serviceInView ? "visible" : ""}`} ref={serviceInViewRef}>
            <img src={require(`../../../Assets/Images/${props.image_name}`)} className="service-image" />
            <h3>{props.header}</h3>
            <hr />
            <p>{props.content}</p>
            <HashLink smooth className="service-icon-container" to='#contact'>
                <img src={require(`../../../Assets/Images/${props.icon_image_name}`)} className="service-icon" />
                <p>Lets talk about {props.header.toLowerCase()}!</p>
            </HashLink>
        </div>
    );
}

export default Service;
