import { combineReducers, createStore } from "redux";
import areaReducer from "./areaReducer";
import bindClientsReducer from "./bindClientsReducer";

let reducers = combineReducers({
    area:areaReducer,
    clientsPage:bindClientsReducer
})

let store = createStore(reducers);

export default store;