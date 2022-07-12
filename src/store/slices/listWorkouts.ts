import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWorkout } from "types/index";


const initialState: IWorkout[] = [
    { id: 1, name: 'Тренировка 1', date: '21.06.22', },
    { id: 2, name: 'Тренировка 2', date: '25.06.22', },
]

const listWorkouts = createSlice({
    name: "ListWorkouts",
    initialState,
    reducers: {
        add_workout: (state, action: PayloadAction<IWorkout>) => {
            state.push(action.payload)
        },
    },
})

export default listWorkouts.reducer;
export const { add_workout } = listWorkouts.actions;