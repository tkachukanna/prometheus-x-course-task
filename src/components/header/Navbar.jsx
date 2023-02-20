import "./header.css";
import cart from "../../assets/icons/cart.svg";
import avatar from "../../assets/images/avatar.png";
import { Link, useNavigate } from "react-router-dom";
import { LocalStorageService, LS_KEYS } from "../../services/localStorage";
import { useState } from "react";

export const Navbar = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState(
        LocalStorageService.get(LS_KEYS.USERNAME)
    );
    const [userAuthorized, setUserAuthorized] = useState(
        LocalStorageService.get(LS_KEYS.USERAUTHORIZED)
    );

    return (
        <nav className="menu">
            <ul className="menu__list">
                <li className="menu__cart">
                    <Link to="/cart">
                        <img src={cart} alt="cart" />
                    </Link>
                </li>
                <li className="menu__signout">
                    <button
                        onClick={() => {
                            LocalStorageService.remove('username');
                            LocalStorageService.set('userauthorized', false);
                            navigate("/");
                        }}
                    >
                        Sign-Out
                    </button>
                </li>
                <li className="menu__user">
                    <img src={avatar} alt="avatar" />
                    <span className="menu__username">{username}</span>
                </li>
            </ul>
        </nav>
    );
}