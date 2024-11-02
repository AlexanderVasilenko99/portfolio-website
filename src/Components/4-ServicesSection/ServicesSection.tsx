import ServiceOptionModel from "../../Models/ServiceOptionModel";
import Service from "./Service/Service";
import "./ServicesSection.scss";

function ServicesSection(): JSX.Element {
    const services: ServiceOptionModel[] = [
        new ServiceOptionModel(
            1,
            "Websites",
            "I develop new websites from scratch custom made specifically for your business needs.",
            "websites7.1.png",
            'tech1.png'),
        new ServiceOptionModel(
            2,
            "Landing Pages",
            "I make a simple web pages usually designed for selling a product or pulling in leeds.",
            "websites9.1.png",
            "domain1.png"),
        new ServiceOptionModel(
            3,
            "Management",
            "Already have a website and looking for someone to manage it? look no further!",
            "websites8.png",
            "landing1.png")
    ]
    return (
        <div className="ServicesSection" id="services">
            <div className="services-headers-container">
                <h1>My Services</h1>
                <h3>I can offer you...</h3>
            </div>
            {services.map(s => <div className="col">
                <Service
                    id={s.id}
                    header={s.header}
                    content={s.content}
                    image_name={s.image_name}
                    icon_image_name={s.icon_image_name}
                />
            </div>)}
        </div >
    );
}

export default ServicesSection;
