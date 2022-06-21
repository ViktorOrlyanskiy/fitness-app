import { combineReducers, configureStore } from "@reduxjs/toolkit";
import listExercises from "./listExercises";
import listWorkouts from "./listWorkouts";


const rootReducer = combineReducers({
    listWorkouts: listWorkouts,
    listExercises: listExercises,
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
