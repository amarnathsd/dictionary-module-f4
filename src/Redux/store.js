import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import fetchReducer from './Reducer/fetchReducer';


const store = createStore(fetchReducer, applyMiddleware(thunk));

export default store;