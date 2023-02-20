import { useState } from "react";
import { Navigate } from "react-router-dom";
import { LocalStorageService, LS_KEYS } from "../services/localStorage";

export const CheckAutho = ({ children }) => {

    const [userAuthorized, setUserAuthorized] = useState(
        LocalStorageService.get(LS_KEYS.USERAUTHORIZED)
    );

    if (userAuthorized !== true) {
        return <Navigate to='/prometheus-x-course-task/' />
    }

    return children;
}