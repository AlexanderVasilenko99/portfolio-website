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
                    {/* <br />
                    <br /> */}
                    <p>
                        I am determined to provide the best products possible any client and take great pride in my work,
                    </p>
                    {/* <br />
                    <br /> */}
                    <p>
                        So if you are looking anything web-related, look no further!
                    </p>
                </div>
            </div>
            <div className="right-col">
                <img src={require("../../Assets/Images/me.png")} />
            </div>
        </div>
    );
}

export default AboutSection;
