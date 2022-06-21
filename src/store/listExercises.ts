import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IExercise } from "types/index";


const initialState: IExercise[] = [
    {
        id: 0,
        isActive: false,
        name: '',
        comment: ''
    },
]


const listExercises = createSlice({
    name: 'listExercises',
    initialState,
    reducers: {
        clearListExercises: (state) => { state.length = 0 },
        addExercise: (state, { payload }: PayloadAction<IExercise>) => {
            state.push(payload)
        },
        // removeExercise: (state, { payload }: PayloadAction<IExercise>) => {
        //     state = state.filter(({id}) => id !== payload)
        // }
    }
})

export default listExercises.reducer;
export const { clearListExercises } = listExercises.actions;



