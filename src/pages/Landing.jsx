import logo from "../assets/logo.png";
import redberry from "../assets/redberry.png";
import LandingStyle from "../styles/Landing.module.scss";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className={LandingStyle.landing}>
            <div className={LandingStyle.header}>
                <img src={redberry} alt="redberry" />
            </div>
            <Link to="/PersonalInfo">
                ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ
            </Link>
            <img className={LandingStyle.logo} src={logo} alt="logo" />
        </div>
    )
}

export default Landing;