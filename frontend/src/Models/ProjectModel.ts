export enum WORK_TYPES {
    WEBSITE = 'Website',
    LANDING_PAGE = 'Landing page',
    MAINTENANCE = 'Maintenance',
}

export class ProjectModel {
    public constructor(public project_name: string, public workType: WORK_TYPES, public redirect: string, public image_name: string) {
        this.project_name = project_name;
        this.workType = workType;
        this.redirect = redirect;
        this.image_name = image_name;
    }
}