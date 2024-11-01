import GetInTouchButton from "../Common/GetInTouchButton/GetInTouchButton";
import ServicesButton from "../Common/ServicesButton/ServicesButton";
import "./AboutSection.scss";
import { useInView } from 'react-intersection-observer';

function AboutSection(): JSX.Element {
    const [aboutHeaderRef, aboutHeaderInView] = useInView({ triggerOnce: false });
    const [aboutContentRef, aboutContentInView] = useInView({ triggerOnce: false });
    const [profilePicInViewRef, profilePicInView] = useInView({ triggerOnce: false });

    return (
        <div className="AboutSection" id="about">
            <div className="left-col">
                <h1 className={`${aboutHeaderInView ? `visible` : ``}`} ref={aboutHeaderRef}>
                    Who Am I?
                </h1>
                <div className={`${aboutContentInView ? `visible` : ``}`} ref={aboutContentRef}>
                    <p>
                        My name is Alexander Vasilenko and I create custom made, beautiful, and responsive web applications with
                        great joy.
                    </p>
                    <p>
                        An ambitious young man with a unique and funny personality constantly seeking to improve and determined
                        to provide the best products possible for any client.
                    </p>
                    <p>
                        So if you are in the market for anything web-related, look no further!
                    </p>
                </div>
                <div className="buttons">
                    <GetInTouchButton />
                    <ServicesButton />
                </div>
            </div>
            <div className="right-col">
                <div>
                    <img
                        ref={profilePicInViewRef}
                        src={require("../../Assets/Images/workmesquare.jpeg")}
                        className={`${profilePicInView ? 'profile-pic-visible' : ""}`}
                    />
                </div>
            </div>
        </div >
    );
}

export default AboutSection;
