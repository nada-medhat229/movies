import { combineReducers } from "redux";
import { favouriteReducer } from "./favourite";
export default  combineReducers({
    favourite:favouriteReducer
});