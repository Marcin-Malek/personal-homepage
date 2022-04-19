import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: "light",
    fetchState: undefined,
    githubRepos: undefined,
};

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        toggleDarkTheme(state) {
            state.theme === "light" ? state.theme = "dark" : state.theme = "light";
        },
        fetchGithubRepos: () => { },
        setFetchState: (state, { payload }) => {
            state.fetchState = payload;
        },
        setGithubRepos: (state, { payload }) => {
            state.githubRepos = payload;
        },
    }
});

export const {
    toggleDarkTheme,
    fetchGithubRepos,
    setFetchState,
    setGithubRepos,
} = globalSlice.actions;

export const selectTheme = state => state.theme;

export const selectFetchState = state => state.fetchState;

export const selectGithubRepos = state => state.githubRepos;

export default globalSlice.reducer;