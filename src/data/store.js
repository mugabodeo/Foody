import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import rootReducer from "./reducers";
import {fetchRecipes} from './actions/index';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchRecipes())
console.log(store.getState())

export default store;