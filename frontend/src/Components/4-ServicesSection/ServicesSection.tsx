import ServiceOptionModel from "../../Models/ServiceOptionModel";
import Service from "./Service/Service";
import "./ServicesSection.scss";

function ServicesSection(): JSX.Element {
    const services: ServiceOptionModel[] = [
        new ServiceOptionModel(
            "Websites",
            "I develop new websites from scratch custom made specifically for your business needs.",
            "websites2.png"),
        new ServiceOptionModel(
            "Landing Pages",
            "I make a simple web pages usually designed for selling a product or pulling in leeds.",
            "websites5.png"),
        new ServiceOptionModel(
            "Management",
            "Already have a website and looking for someone to manage it? look no further!",
            "websites6.png")
    ]
    return (
        <div className="ServicesSection">
            <h1>My Services</h1>
            {services.map(s => <div className="col" key={s.header}><Service
                header={s.header}
                content={s.content}
                image_name={s.image_name}
            />
            </div>)}
        </div >
    );
}

export default ServicesSection;
