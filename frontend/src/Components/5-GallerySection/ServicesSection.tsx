import { ProjectModel, WORK_TYPES } from "../../Models/ProjectModel";
import "./GallerySection.scss";
import Project from "./Project/Project";

function GallerySection(): JSX.Element {
    const projects: ProjectModel[] = [
        new ProjectModel("proj 1", WORK_TYPES.LANDING_PAGE, '#', 'name'),
        new ProjectModel("proj 2", WORK_TYPES.WEBSITE, '#', 'name'),
        new ProjectModel("proj 3", WORK_TYPES.LANDING_PAGE, '#', 'name'),
        new ProjectModel("proj 4", WORK_TYPES.WEBSITE, '#', 'name'),
        new ProjectModel("proj 5", WORK_TYPES.LANDING_PAGE, '#', 'name'),
        new ProjectModel("proj 6", WORK_TYPES.LANDING_PAGE, '#', 'name'),
        new ProjectModel("proj 7", WORK_TYPES.LANDING_PAGE, '#', 'name'),
        new ProjectModel("proj 8", WORK_TYPES.WEBSITE, '#', 'name'),
        new ProjectModel("proj 9", WORK_TYPES.LANDING_PAGE, '#', 'name'),
    ]
    return (
        <div className="GallerySection">
            <h1>Some of my most recent projects</h1>
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
