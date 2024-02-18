class ServiceOptionModel {
    public constructor(public header: string, public content: string, public image_name: string) {
        this.header = header;
        this.content = content;
        this.image_name = image_name;
    }
}
export default ServiceOptionModel;