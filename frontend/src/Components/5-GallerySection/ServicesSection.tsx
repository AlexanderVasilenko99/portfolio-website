import { ProjectModel, WORK_TYPES } from "../../Models/ProjectModel";
import "./GallerySection.scss";
import Project from "./Project/Project";

function GallerySection(): JSX.Element {
    const projects: ProjectModel[] = [
        new ProjectModel("Vasilenko Vacations", WORK_TYPES.WEBSITE, 'http://45.55.70.243:4000/home', 'vasilenko-vacations.png'),
        new ProjectModel("Vasilenko Car Rental", WORK_TYPES.WEBSITE, 'alexandervasilenko99.github.io/car-rental/', 'car-rental.png'),
        new ProjectModel("Insta Boost", WORK_TYPES.LANDING_PAGE, 'https://lp.smoove.io/o6mp', 'insta-boost4.png'),
        new ProjectModel("Summer Makeover", WORK_TYPES.LANDING_PAGE, 'https://lp.smoove.io/omm7', 'summer-makeover1.png'),
        new ProjectModel("Cinderella", WORK_TYPES.LANDING_PAGE, 'https://lp.smoove.io/odby', 'cinderella3.png'),
        new ProjectModel("Sockets Checklist", WORK_TYPES.LANDING_PAGE, 'https://lp.smoove.io/xqmn', 'checklist1.png'),
        new ProjectModel("JenyVStudio", WORK_TYPES.MAINTENANCE, 'https://www.jenyvstudio.co.il/', 'maintanence1.png'),
        new ProjectModel("Wood Wonders", WORK_TYPES.WEBSITE, '#', 'wood-wonders.png'),
        new ProjectModel("proj 9", WORK_TYPES.LANDING_PAGE, '#', 'me.png'),
    ]
    return (
        <div className="GallerySection">
            <div className="gallery-headers-container">
                <h1>Project Gallery</h1>
                <h3>Some of my recent projects</h3>
            </div>
            {projects.map(p => <div key={p.project_name}><Project
                redirect={p.redirect}
                workType={p.workType}
                image_name={p.image_name}
                project_name={p.project_name}
            /></div>)}
        </div >
    );
}

export default GallerySection;
