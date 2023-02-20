import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LocalStorageService, LS_KEYS } from "../../services/localStorage";
import avatar from "../../assets/images/avatar.png";
import "./signinForm.css";

export const SigninForm = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [userAuthorized, setUserAuthorized] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        if (username.length < 4 || username.length > 16) {
            setIsButtonDisabled(true);
            document.getElementById('signin-btn').classList.add('disabled');
            document.getElementById('signin-btn').classList.remove('signin__button');
        } else {
            setIsButtonDisabled(false);
            document.getElementById('signin-btn').classList.remove('disabled');
            document.getElementById('signin-btn').classList.add('signin__button');
        }
    }, [username])

    const handleChangeUsername = (event) => {
        setUsername(event.target.value.trim());
    }

    const authorizeUser = () => {
        LocalStorageService.set(LS_KEYS.USERNAME, username);
        LocalStorageService.set(LS_KEYS.USERAUTHORIZED, true);
    }

    return (
        <section className="signin">
            <img className="signin__avatar" src={avatar} alt="Avatar" />
            <form className="signin__form" action="#" method="post">
                <label className="signin__label">Username</label>
                <input
                    className="signin__input"
                    type="text"
                    id="username"
                    name="username"
                    placeholder="type Username"
                    onChange={(event) => handleChangeUsername(event)}
                />
                <button
                    id="signin-btn"
                    className="signin__button"
                    disabled={isButtonDisabled}
                    type="submit"
                    onClick={() => {
                        authorizeUser();
                        navigate("/prometheus-x-course-task/books");
                    }}>Sign-In</button>
            </form>
        </section >
    );
}