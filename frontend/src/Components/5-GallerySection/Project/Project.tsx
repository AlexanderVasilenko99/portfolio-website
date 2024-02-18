import { ProjectModel } from "../../../Models/ProjectModel";
import "./Project.scss";

function Project(props: ProjectModel): JSX.Element {
    return (
        <div className="Project">
            <p>{props.project_name}</p>
            <p>{props.workType}</p>
        </div>
    );
}

export default Project;
