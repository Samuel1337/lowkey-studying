import { createStore } from 'redux';
import rootReducer from './reducer';
import logger from 'logger';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() && logger
);

export default store;
