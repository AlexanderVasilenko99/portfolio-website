import GetInTouchButton from "../Common/GetInTouchButton/GetInTouchButton";
import "./AboutSection.scss";

function AboutSection(): JSX.Element {
    return (
        <div className="AboutSection" id="about">
            <div className="left-col">
                <h1>Who Am I?</h1>
                <div>
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
                <GetInTouchButton />
            </div>
            <div className="right-col">
                <div>
                    <img src={require("../../Assets/Images/me2.png")} />
                </div>
            </div>
        </div >
    );
}

export default AboutSection;
