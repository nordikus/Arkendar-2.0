import { configureStore } from '@reduxjs/toolkit'
import GimliArtSlice from './GimliArtSlice'
import authSlice from './authSlice';

const store = configureStore({
    reducer: {
        GimliArtifacts: GimliArtSlice,
        auth: authSlice,
    },
})

export default store