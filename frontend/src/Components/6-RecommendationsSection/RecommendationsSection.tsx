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
            'ניחן בהבנה עמוקה, מהירות מחשבה ומהירות ביצוע',
            `אלכסנדר וסילנקו היה תלמיד שלי במסלול Full Stack Web בג'ון ברייס.
            המסלול כלל פיתוח Frontend ופיתוח Backend 
            בטכנולוגיות מהחדשות שיש.
            ברצוני לציין שאלכסנדר השקיע המון בקורס, בתרגולים, בעבודות הבית, במשימות ובפרויקטים , הגיע לרמה
            מאוד גבוהה ואף ביצע לא מעט דברים מעבר למה שנדרש.
            כמו כן ראיתי שאלכסנדר אוהב את הנושא , מתחבר לתחום הפיתוח וניחן בהבנה עמוקה, מהירות מחשבה
            ומהירות ביצוע.
            אלכסנדר בהחלט יהיה נכס ל כל ארגון בו יבחר לעבוד. 
            אני מאחל לאלכסנדר הצלחה רבה בכל אשר יפנה.`,
            `אסף פינקלשטיין, מרצה פיתוח - ג'ון ברייס הדרכה`),
        new RecommendationModel(
            'מקצוען אמיתי',
            `רציתי להגיד לך תודה רבה על דפי נחיתה שבנית עבורי.
            עשית עבודה מדויקת והיית מאוד קשוב לצרכים ולבקשות שלי.
            תודה רבה על ההשקעה, הגדלת הראש והיעילות.
            אם אני שומעת שמישהו מחפש בניית דפי נחיתה,
            אני ממליצה עליך בשמחה רבה,
            כי באמת מגיע לך!
            מקצוען אמיתי.`,
            `ג'ני ויאליך - JenyVStudio`),
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
