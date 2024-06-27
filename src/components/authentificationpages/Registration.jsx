import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {register} from "../../redux/authSlice";
import MStyles from "../../MainStyles.module.scss";
import {useNavigate} from "react-router-dom";
const Registration= () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const [isRegistered, setIsRegistered] = useState(false);
    const navigate=useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(register({ username, email, password }))
        setIsRegistered(true);
    };

    return (
        <div className={MStyles.homeMain} id="Authentification">
            <form className="form-column" onSubmit={handleSubmit}>
            <label>Имя пользователя:</label>
            <input required="true" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label>Email:</label>
            <input required="true" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Пароль:</label>
            <input required="true" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Зарегистрироваться</button>
        </form>
            {isRegistered && navigate("/login", { replace: true })}
        </div>
    );
};

export default Registration;