import "./AboutSection.scss";

function AboutSection(): JSX.Element {
    return (
        <div className="AboutSection" id="about">
            <div className="left-col">
                <h1>Who Am I?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim suscipit quos error dolorum repudiandae, omnis ea recusandae deserunt quaerat vel. Odio porro minima consectetur accusantium sed? Obcaecati, est rerum nulla assumenda sint, ipsum amet error excepturi aliquid adipisci odit! Repudiandae.</p>
            </div>
            <div className="right-col">
                <img src={require("../../Assets/Images/me.png")} />
            </div>
        </div>
    );
}

export default AboutSection;
