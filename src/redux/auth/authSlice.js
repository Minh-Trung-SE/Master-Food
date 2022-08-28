import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    auth: {}
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        saveAuth: (state, action) => {
            state.auth = action.payload
        },
        deleteAuth: (state) => {
            state.auth = {}
        }
    },
})

export const { saveAuth, deleteAuth } = authSlice.actions

export default authSlice.reducer