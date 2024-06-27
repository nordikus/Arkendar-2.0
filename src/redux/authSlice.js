import { createSlice } from '@reduxjs/toolkit';
import {findUser, createUser} from "../userutils.js"

const initialState = {
    user: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const { username, password } = action.payload;
            const userData = findUser(username, password); // Логика поиска пользователя в JSON
            if (userData) {
                state.user = userData;
                state.isAuthenticated = true;
            } else {
                // Отображение сообщения об ошибке
            }
        },
        register: (state, action) => {
            const { username, email, password } = action.payload;
            createUser(username, email, password); // Логика создания пользователя в JSON
            state.user = { username };
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
    },
});

export const { login, register, logout } = authSlice.actions;
export const selectAuth = (state) => state.auth;
export default authSlice.reducer;