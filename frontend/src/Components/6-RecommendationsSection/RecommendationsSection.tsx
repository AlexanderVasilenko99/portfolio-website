import RecommendationModel from "../../Models/RecommendationModel";
import Recommendation from "./Recommendation/Recommendation";
import "./RecommendationsSection.scss";

function RecommendationsSection(): JSX.Element {
    const recommendations: RecommendationModel[] = [
        new RecommendationModel(
            'A true professional',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur distinctio reprehenderit aut harum repellendus eum.',
            'Alex Vas - devLink'),
        new RecommendationModel(
            'A real homie',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, veniam!',
            'Jeny V - JenyVStudio'),
        new RecommendationModel(
            'A certified gymbro',
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos illum rem, nesciunt saepe vitae ullam.',
            'Assaf Lotz - op.com'),
    ]
    return (
        <div className="RecommendationsSection" id="recommendations">
            <h1>Client Testimonials</h1>
            {recommendations.map(r => <div className='col' key={r.content}><Recommendation
                header={r.header}
                content={r.content}
                author={r.author}
            /></div>)}
        </div >
    );
}

export default RecommendationsSection;
