import CVStyle from "../styles/components/CV.module.scss";
import { Link } from "react-router-dom";
import Education from './Education/Education';
import Experience from './Experience/Experience';
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import img from "./img.png"

const CV = () => {
    return (
      <div className={CVStyle.cv}>
        <div className={CVStyle.main_info_container}>
          <div className={CVStyle.main_info}>
            <h1>ანზორ მელაძე</h1>
            <div className={CVStyle.contacts}>
              <a href="mailto:anzorr666@redberry.ge">
                <MdAlternateEmail /> anzorr666@redberry.ge
              </a>
              <p>
                <FaPhoneAlt /> +995 597 63 45 16
              </p>
            </div>
            <div className={CVStyle.about}>
              <h2>ჩემს შესახებ</h2>
              <p>
                ძალიან მიყვარს დიზაინის კეთება. დილით ადრე რომ ავდგები
                გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკეთებ.{" "}
              </p>
            </div>
          </div>
          <div className={CVStyle.photo}>
            <img src={img} alt="person image" />
          </div>
        </div>
        <div className={CVStyle.experience_container}>
          <h2>გამოცდილება</h2>
          <Experience 
            employer="Microsoft"
            role="Developer"
            workFrom="2020-09-23"
            workTill="2020-09-23"
            workDescription="Experienced Javascript Native Developer with 5 years in the industry. proficient withreact. Used problem-solving aptitude to encahge application performance by 14%.created data visualisation tools and integrated designs. "
          />
          <Experience 
            employer="Microsoft"
            role="Developer"
            workFrom="2020-09-23"
            workTill="2020-09-23"
            workDescription="Experienced Javascript Native Developer with 5 years in the industry. proficient withreact. Used problem-solving aptitude to encahge application performance by 14%.created data visualisation tools and integrated designs. "
          />
        </div>
        <div className={CVStyle.education_container}>
          <h2>განათლება</h2>
          <Education
            collegeName="წმ. ანდრიას საპატრიარქოს სასწავლებელი"
            degree="სტუდენტი"
            classYear="2020-09-23"
            educationDescription="ვსწავლობდი გულმოდგინეთ. მყავდა ფრიადები. რაც შემეძლო — ვქენი. კომპიუტერები მიყვარდა. ვიჯექი ჩემთვის, ვაკაკუნებდი ამ კლავიშებზე. მეუნებოდნენ — დაჯექი, წაიკითხე რამე, რას აკაკუნებ, დრო მოვა და ჩაგიკაკუნებსო. აჰა, მოვიდა დრო და ვერა ვარ დეველოპერი?"
          />
          <Education
            collegeName="წმ. ანდრიას საპატრიარქოს სასწავლებელი"
            degree="სტუდენტი"
            classYear="2020-09-23"
            educationDescription="ვსწავლობდი გულმოდგინეთ. მყავდა ფრიადები. რაც შემეძლო — ვქენი. კომპიუტერები მიყვარდა. ვიჯექი ჩემთვის, ვაკაკუნებდი ამ კლავიშებზე. მეუნებოდნენ — დაჯექი, წაიკითხე რამე, რას აკაკუნებ, დრო მოვა და ჩაგიკაკუნებსო. აჰა, მოვიდა დრო და ვერა ვარ დეველოპერი?"
          />
        </div>
      </div>
    );
}

export default CV;