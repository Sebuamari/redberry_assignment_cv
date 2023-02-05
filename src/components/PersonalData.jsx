import PersonalDataStyle from "../styles/components/PersonalData.module.scss";
import { Link } from "react-router-dom";
import Header from "./Header";
import Input from "../layout/Input";
import PhotoUpload from "../layout/PhotoUpload";
import TextArea from "../layout/TextArea";
import Button from "../layout/Button";

const PersonalData = () => {
  return (
    <div className={PersonalDataStyle.personal_data_container}>
      <Header route={"/"} pageName={"პირადი ინფო"} pageNumber={1} />
      <div className={PersonalDataStyle.personal_data}>
        <div className={PersonalDataStyle.name_and_surname}>
          <Input
            target="name"
            label="სახელი"
            placeholder="ანზორ"
            validationRule={"მინიმუმ 2 ასო, ქართული ასოები"}
          />
          <Input
            target="surname"
            label="გვარი"
            placeholder="მუმლაძე"
            validationRule={"მინიმუმ 2 ასო, ქართული ასოები"}
          />
        </div>
        <PhotoUpload />
        <TextArea
          target="about"
          label="ჩემს შესახებ (არასავალდებულო)"
          placeholder="ზოგადი ინფო შენს შესახებ"
        />
        <Input
          target="email"
          label="ელ.ფოსტა"
          placeholder="anzorr666@redberry.ge"
          validationRule={"უნდა მთავრდებოდეს @redberry.ge-ით"}
        />
        <Input
          target="phone"
          label="მობილურის ნომერი"
          placeholder="+995 551 12 34 56"
          validationRule={
            "უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"
          }
        />
        <div className={PersonalDataStyle.link_container}>
            <Link to="/Experience">
                <Button text={"შემდეგი"} />
            </Link>
        </div>
      </div>
    </div>
  );
}

export default PersonalData;