import PersonalInfoStyle from "../styles/pages/PersonalInfo.module.scss";
import PersonalData from '../components/PersonalData';
import CV from "../components/CV";

const PersonalInfo = () => {
    return (
        <div className={PersonalInfoStyle.personal_info_page}>
            <PersonalData />
            <CV />
        </div>
    )
}

export default PersonalInfo;