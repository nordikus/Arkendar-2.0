import {useDispatch, useSelector} from "react-redux";
import {logout, selectAuth} from "../../redux/authSlice";
import MStyles from "../../MainStyles.module.scss";
import "./profile.css"

export const Profile = () => {

    const isAuthenticated = useSelector(selectAuth).isAuthenticated;

    const {user} = useSelector(selectAuth);

    const dispatch = useDispatch();

    if (!isAuthenticated) {
        return <p>Пожалуйста, войдите в систему.</p>;
    }

    return (
        <div className={MStyles.homeMain} id="Profile">
            <div className={MStyles.justContainer}>
                <h1>Пользователь: {user.username}</h1>
                <p>Email: {user.email}</p>
                <p>Персонажи: функция в разработке</p>
                <button onClick={() => {
                    dispatch(logout());
                }}>Выйти из аккаунта
                </button>
            </div>
        </div>
    );
};