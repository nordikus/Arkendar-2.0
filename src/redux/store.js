import { configureStore } from '@reduxjs/toolkit'
import GimliArtSlice from './GimliArtSlice'
import authSlice from './authSlice';
import CharacterSlice from "./CharacterSlice";

const store = configureStore({
    reducer: {
        GimliArtifacts: GimliArtSlice,
        auth: authSlice,
        character: CharacterSlice,
    },
})

export default store