import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {login, selectAuth} from "../../redux/authSlice";
import MStyles from "../../MainStyles.module.scss";
import "./authentification.css";
import {Navigate, } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const isAuthenticated = useSelector(selectAuth).isAuthenticated;

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(login({ username, password }))

    };

    return (
        <div className={MStyles.homeMain} id="Authentification">
            <form className="form-column" onSubmit={handleSubmit}>
                <label>Имя пользователя:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label>Пароль:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Войти</button>
            </form>
            {isAuthenticated && <Navigate to="/" replace />}  {/* Redirect only if logged in */}
        </div>
    );
};

export default Login;