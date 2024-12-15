// authSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { findUser, createUser } from "../userutils.js";

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const { username, password } = action.payload;
            const userData = findUser(username, password); // Проверка пользователя в localStorage
            if (userData) {
                state.user = userData;
                state.isAuthenticated = true;
                localStorage.setItem('user', JSON.stringify(userData)); // Сохранение пользователя
                localStorage.setItem('isAuthenticated', 'true'); // Флаг авторизации
            } else {
                alert('Неверный логин или пароль'); // Сообщение об ошибке
            }
        },
        register: (state, action) => {
            const { username, email, password } = action.payload;
            if (findUser(username, password)) {
                alert('Пользователь с таким именем уже существует');
                return;
            }
            const newUser = { username, email, password };
            createUser(username, email, password); // Сохранение пользователя
            state.user = newUser;
            state.isAuthenticated = true;
            localStorage.setItem('user', JSON.stringify(newUser)); // Сохранение пользователя
            localStorage.setItem('isAuthenticated', 'true'); // Флаг авторизации
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem('user'); // Удаление данных пользователя
            localStorage.setItem('isAuthenticated', 'false'); // Флаг авторизации
        },
    },
});

export const { login, register, logout } = authSlice.actions;
export const selectAuth = (state) => state.auth;
export default authSlice.reducer;
