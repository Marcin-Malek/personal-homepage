import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchState, GithubReposApiResponse, ThemeType } from "./types";

interface StateType {
    theme: ThemeType;
    fetchState: FetchState;
    githubRepos?: GithubReposApiResponse;
}

const initialState: StateType = {
	theme: ThemeType.Light,
	fetchState: FetchState.Initial,
	githubRepos: undefined
};

const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {
		toggleDarkTheme(state) {
			state.theme === ThemeType.Light ?
				state.theme = ThemeType.Dark :
				state.theme = ThemeType.Light;
		},
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		fetchGithubRepos: () => { },
		setFetchState: (state, { payload }: PayloadAction<FetchState>) => {
			state.fetchState = payload;
		},
		setGithubRepos: (state, { payload }: PayloadAction<GithubReposApiResponse>) => {
			state.githubRepos = payload;
		}
	}
});

export const {
	toggleDarkTheme,
	fetchGithubRepos,
	setFetchState,
	setGithubRepos
} = globalSlice.actions;

export const selectTheme = (state: StateType) => state.theme;

export const selectFetchState = (state: StateType) => state.fetchState;

export const selectGithubRepos = (state: StateType) => state.githubRepos;

export default globalSlice.reducer;