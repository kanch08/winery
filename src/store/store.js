import {createStore} from "redux";
import {rootReducer} from '../reducers/rootReducer';

// const devToolPlugin = typeof window !== "undefined" ? (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) : ()=> {};

export const store = createStore(
    rootReducer,
);
