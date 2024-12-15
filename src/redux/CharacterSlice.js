import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    characters: [],
};

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        addCharacter: (state, action) => {
            state.characters.push(action.payload);
        },
        updateCharacter: (state, action) => {
            const { index, character } = action.payload;
            state.characters[index] = character;
        },
        deleteCharacter: (state, action) => {
            state.characters = state.characters.filter((char) => char.id !== action.payload);
        },
    },
});

export const { addCharacter, updateCharacter, deleteCharacter } = charactersSlice.actions;
export const selectCharacters = (state, username) =>
    state.characters.characters.filter((char) => char.createdBy === username);
export default charactersSlice.reducer;
