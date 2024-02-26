import GetInTouchButton from "../Common/GetInTouchButton/GetInTouchButton";
import "./AboutSection.scss";

function AboutSection(): JSX.Element {
    return (
        <div className="AboutSection" id="about">
            <div className="left-col">
                <h1>Who Am I?</h1>
                <div>
                    <p>
                        My name is Alexander Vasilenko and I create beautiful, responsive and custom web applications for a living.
                        <br />
                        An ambitious young man with a unique and spicey personality constantly seeking to
                        improve and better himself and his surrounding.
                    </p>
                    <p>
                        I am determined to provide the best products possible any client and take great pride in my work,
                    </p>
                    <p>
                        So if you are looking anything web-related, look no further!
                    </p>
                </div>
                <GetInTouchButton />
            </div>
            <div className="right-col">
                <div>
                    <img src={require("../../Assets/Images/me2.png")} />
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
