import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducer from "./reducers/combineReducer";
export const store = createStore(combineReducer, composeWithDevTools());
export default store;
// 1- Install redux react-redux
// 2- create store folder -> Actions / Reducers / Store
// 3- Define action -> each action should return object of type & payload
// 4- Define reducer -> each reducer should receive [state , action] -> Define for initial state -> Switch case based on action.type
// 5- Define combineReducer (REMEMBER: add each created reducer to combine reducer)
// 6- Define store -> createStore(combinedReducer , composeWithDevTools()) -> You need to install redux-devtools package and setup chrome extension
// 7- Wrap app in index.js file with <Provider> Tag and pass store to the provider <Provider store={store}>
