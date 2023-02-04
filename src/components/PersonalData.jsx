import PersonalDataStyle from "../styles/components/PersonalData.module.scss";
import Header from "./Header";

const PersonalData = () => {
    return (
        <div className={PersonalDataStyle.personal_data}>
            <Header route={"/"} pageName={"პირადი ინფო"} pageNumber={1} />
        </div>
    )
}

export default PersonalData;