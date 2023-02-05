import EducationStyle from "../../styles/components/Education.module.scss";

const Education = ({
    collegeName,
    degree,
    classYear,
    educationDescription
}) => {
    return (
        <div className={EducationStyle.education_container}>
            <p className={EducationStyle.college_and_degree}>{collegeName + ", " + degree}</p>
            <p className={EducationStyle.class_year}>{classYear}</p>
            <p className={EducationStyle.education_description}>{educationDescription}</p>
        </div>
    )
}

export default Education;