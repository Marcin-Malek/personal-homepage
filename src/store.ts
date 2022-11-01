import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { portfolioSaga } from "./Portfolio/portfolioSaga";
import reducer from "./slice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer,
	middleware: [sagaMiddleware]
});

sagaMiddleware.run(portfolioSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
