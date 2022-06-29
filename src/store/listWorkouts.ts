import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWorkout } from "types/index";


const initialState: IWorkout[] = [
    { id: 0, name: '', date: '', },
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