import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    artifacts: [],
}

const GimliArtSlice = createSlice({
    name: 'GimliArtifacts',
    initialState,
    reducers: {
        setArt(state, action) {
            state.artifacts = action.payload
        },
    },
})

export const { setArt } = GimliArtSlice.actions
export default GimliArtSlice.reducer