import { Link, useLocation } from "react-router-dom";
import "./header.css";
import { Navbar } from "./Navbar";

export const Header = () => {

    const location = useLocation();

    return (
        <header className="header">
            <Link to="/prometheus-x-course-task/books" className="header__title">JS BAND STORE / Anna Tkachuk</Link>
            {
                location.pathname !== '/prometheus-x-course-task/' && <Navbar />
            }
        </header>
    )

}