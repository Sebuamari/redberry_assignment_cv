import Header from "../Header";
import EducationDataStyle from "../../styles/components/Education.module.scss";

const EducationData = () => {
    return (
        <div className={EducationDataStyle.education_data}>
            <Header route={"/Experience"} pageName={"ᲒᲐᲜᲐᲗᲚᲔᲑᲐ"} pageNumber={3} />
        </div>
    )
}

export default EducationData;