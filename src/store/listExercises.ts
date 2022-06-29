import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IExercise, ISet } from "types/index";
import { changeActiveExercise, changeExercise, addSet } from "./actions/listExercisesAction";


interface IPayload {
    id: number;
    isActive: boolean;
}

const initialState: IExercise[] = [
    {
        id: 1,
        isActive: false,
        name: 'Приседания',
        comment: '',
        sets: [
            { id: 1, weight: '1', amount: '1', comment: 'приседания', },
            { id: 2, weight: '1', amount: '1', },
        ]
    },
    {
        id: 2,
        isActive: true,
        name: 'Жим',
        comment: '',
        sets: [
            { id: 1, weight: '2', amount: '2', comment: 'Жим', },
            { id: 2, weight: '2', amount: '2', },
        ]
    },
]


const listExercises = createSlice({
    name: 'listExercises',
    initialState,
    reducers: {
        clear_list_exercises: (state) => { state.length = 0 },

        add_exercise: (state, { payload }: PayloadAction<IExercise>) => {
            state.push(payload)
        },
        remove_exercise: (state, { payload }: PayloadAction<IPayload>) => {
            return state.filter(({ id }) => id !== payload.id);
        },
        change_exercise: (state, { payload }: PayloadAction<number>) => {
            return changeExercise(state, payload)
        },
        change_active_exercise: (state) => {
            return changeActiveExercise(state)
        },

        add_set: (state, { payload }: PayloadAction<ISet>) => {
            return addSet(state, payload)
        }
    }
})

export default listExercises.reducer;
export const {
    clear_list_exercises,
    add_exercise,
    remove_exercise,
    change_exercise,
    change_active_exercise,
    add_set,
} = listExercises.actions;





