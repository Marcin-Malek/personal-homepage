import { takeLatest, call, put, delay } from "redux-saga/effects";
import { fetchGithubRepos, setGithubRepos, setFetchState } from "../slice";
import { FetchState, GithubReposApiResponse } from "../types";
import { getGithubRepos } from "./getGithubRepos";

function* fetchGithubReposHandler() {
	yield put(setFetchState(FetchState.Loading));
	try {
		const githubRepos: GithubReposApiResponse = yield call(getGithubRepos);
		yield put(setGithubRepos(githubRepos));
		yield delay(2000); // just to demonstrate loading animation
		yield put(setFetchState(FetchState.Success));
	} catch (error) {
		yield put(setFetchState(FetchState.Failure));
		console.error(error);
	}
}

export function* portfolioSaga() {
	yield takeLatest(fetchGithubRepos.type, fetchGithubReposHandler);
}