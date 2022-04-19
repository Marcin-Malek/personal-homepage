import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { portfolioSaga } from "./Portfolio/portfolioSaga";
import reducer from './slice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer,
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(portfolioSaga);

export default store;