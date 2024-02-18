import Service from "./Service/Service";
import "./ServicesSection.scss";

function ServicesSection(): JSX.Element {
    return (
        <div className="ServicesSection">
            <h1>My Services</h1>
            <div className="col">
                <Service />
            </div>
            <div className="col">
                <Service />
            </div>
            <div className="col">
                <Service />
            </div>
        </div>
    );
}

export default ServicesSection;
