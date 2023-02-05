import ExperienceDataStyle from "../../styles/components/Experience.module.scss";
import Header from "../Header";

const ExperienceData = () => {
    return (
        <div className={ExperienceDataStyle.experience_data}>
            <Header route={"/PersonalInfo"} pageName={"ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ"} pageNumber={2} />
        </div>
    )
}

export default ExperienceData;