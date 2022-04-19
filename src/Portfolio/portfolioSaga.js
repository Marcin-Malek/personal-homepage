import { takeLatest, call, put, delay } from "redux-saga/effects";
import { fetchGithubRepos, setGithubRepos, setFetchState } from "../slice";
import { getGithubRepos } from "./getGithubRepos";

function* fetchGithubReposHandler() {
    yield put(setFetchState("pending"));
    try {
        const githubRepos = yield call(getGithubRepos);
        yield put(setGithubRepos(githubRepos));
        yield delay(2000);
        yield put(setFetchState("resolved"));
    } catch (error) {
        yield put(setFetchState("rejected"));
        console.error(error);
    }
}

export function* portfolioSaga() {
    yield takeLatest(fetchGithubRepos.type, fetchGithubReposHandler);
}