import ContactOptionModel from "../../Models/ContactOptionModel";
import "./ContactMeSection.scss";
import ContactOption from "./ContactOption/ContactOption";
import { useForm, SubmitHandler } from "react-hook-form";

function ContactMeSection(): JSX.Element {

    const contactOptions: ContactOptionModel[] = [
        new ContactOptionModel("Phone", "(+972)50-814-5431", "tel:0508145431", "x.png"),
        new ContactOptionModel("Email", "alexandervjr1@gmail.com", "mailto:alexandervjr1@gmail.com", "email_icon.png"),
        new ContactOptionModel("LinkedIn", "alexander-vasilenko99", "https://www.linkedin.com/in/alexander-vasilenko99/", "linkedin_icon.png"),
    ]

    const { register, handleSubmit } = useForm();
    return (
        <div className="ContactMeSection">
            <div className="left-col">
                <p className="reach-out">
                    Reach out today to make your dream website come true.
                </p>
                <hr />
                <form onSubmit={handleSubmit((e: any) => {
                    console.log(e);
                })}>
                    <div>
                        <div className="single-input">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                {...register("name")}
                            />
                        </div>
                        <div className="single-input">
                            <label htmlFor="name">Phone</label>
                            <input
                                type="tel"
                                name="tel"
                                {...register("tel")} />
                        </div>
                        <div className="single-input">
                            <label htmlFor="name">Email</label>
                            <input
                                type="email"
                                name="email"
                                {...register("email")} />
                        </div>
                    </div>
                    <button>Send!</button>
                </form>
            </div>
            <div className="right-col">
                {contactOptions.map(co =>
                    <ContactOption
                        key={co.header}
                        header={co.header}
                        content={co.content}
                        redirect={co.redirect}
                        image_name={co.image_name}
                    />)}
            </div>
        </div>
    );
}

export default ContactMeSection;
