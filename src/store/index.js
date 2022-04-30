import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { parametersSetsReducer } from './parametersSetsReducer';



const rootReducer = combineReducers({
    parametersSets: parametersSetsReducer,

})

export const store = createStore(rootReducer, composeWithDevTools())