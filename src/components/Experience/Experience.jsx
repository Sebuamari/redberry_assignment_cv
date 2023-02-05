import ExperienceStyle from "../../styles/components/Experience.module.scss";

const Experience = ({
    employer,
    role,
    workFrom,
    workTill,
    workDescription
}) => {
    return (
        <div className={ExperienceStyle.experience_container}>
            <p className={ExperienceStyle.employer_and_role}>{role + ", " + employer}</p>
            <p className={ExperienceStyle.working_years}>{workFrom + " - " + workTill}</p>
            <p className={ExperienceStyle.work_description}>{workDescription}</p>
        </div>
    )
}

export default Experience;