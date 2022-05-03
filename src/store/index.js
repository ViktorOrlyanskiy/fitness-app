import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { parametersSetsReducer } from './parametersSetsReducer';
import { listExercisesReducer } from './listExercisesReducer';



const rootReducer = combineReducers({
    parametersSets: parametersSetsReducer,
    listExercises: listExercisesReducer,

})

export const store = createStore(rootReducer, composeWithDevTools())