import { createSlice } from '@reduxjs/toolkit'

const initialState = { theme: "light" }

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        toggleDarkTheme(state) {
            state.theme === "light" ? state.theme = "dark" : state.theme = "light";
        },
    },
})

export const { toggleDarkTheme } = globalSlice.actions

export const selectTheme = state => state.theme;

export default globalSlice.reducer