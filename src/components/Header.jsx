import HeaderStyle from "../styles/components/Header.module.scss";
import { Link } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";

const Header = ({
    route,
    pageName,
    pageNumber
}) => {
    return (
        <div className={HeaderStyle.header}>
            <Link to={route} className={HeaderStyle.nav_button}>
                <MdArrowBackIosNew />
            </Link>
            <div className={HeaderStyle.page_info}> 
                <h1>{pageName}</h1>
                <p>{pageNumber}/3</p>
            </div>
        </div>
    )
}

export default Header;