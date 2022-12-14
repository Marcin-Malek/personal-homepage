import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { portfolioSaga } from "./Portfolio/portfolioSaga";
import reducer from "./slice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer,
	middleware: [sagaMiddleware]
});

sagaMiddleware.run(portfolioSaga);


export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
