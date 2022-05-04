import { takeLatest, call, put, delay } from "redux-saga/effects";
import { fetchGithubRepos, setGithubRepos, setFetchState } from "../slice";
import { getGithubRepos } from "./getGithubRepos";

function* fetchGithubReposHandler() {
    yield put(setFetchState("loading"));
    try {
        const githubRepos = yield call(getGithubRepos);
        yield put(setGithubRepos(githubRepos));
        yield delay(2000); // just to demonstrate loading animation
        yield put(setFetchState("success"));
    } catch (error) {
        yield put(setFetchState("failure"));
        console.error(error);
    }
}

export function* portfolioSaga() {
    yield takeLatest(fetchGithubRepos.type, fetchGithubReposHandler);
}