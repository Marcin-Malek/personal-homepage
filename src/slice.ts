import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { GithubReposApiResponse } from './types';

interface StateType {
    theme: string;
    fetchState: "initial" | "loading" | "success" | "failure";
    githubRepos?: GithubReposApiResponse;
}

const initialState: StateType = {
    theme: "light",
    fetchState: "initial",
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

export const selectTheme = (state: RootState) => state.theme;

export const selectFetchState = (state: RootState) => state.fetchState;

export const selectGithubRepos = (state: RootState) => state.githubRepos;

export default globalSlice.reducer;