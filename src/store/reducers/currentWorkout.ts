import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IExercise } from 'shared/models';
import { getCurrentDate } from '../utils/getCurrentDate';

interface ICurrentWorkout {
    id: number | null;
    name: string;
    date: string;
    preventExercises: IExercise[];
    blockExerciseId: number[];
}

const initialState: ICurrentWorkout = {
    id: null,
    name: '',
    date: '',
    preventExercises: [],
    blockExerciseId: [],
};

// временно хранит информацию о текущей тренировки
const CurrentWorkout = createSlice({
    name: 'CurrentWorkout',
    initialState,
    reducers: {
        clear_current_workout: (state) => {
            Object.assign(state, initialState);
        },
        create_id: (state) => {
            state.id = Date.now();
            state.date = getCurrentDate();
        },
        save_name: (state, { payload }: PayloadAction<string>) => {
            if (payload.length > 0) state.name = payload;
        },
        set_prevent_exercise: (
            state,
            { payload }: PayloadAction<IExercise>
        ) => {
            if (payload) state.preventExercises.push(payload);
        },
        set_block_exercise_id: (state, { payload }: PayloadAction<number>) => {
            if (payload) state.blockExerciseId.push(payload);
        },
    },
});

export default CurrentWorkout.reducer;

export const {
    clear_current_workout,
    create_id,
    save_name,
    set_prevent_exercise,
    set_block_exercise_id,
} = CurrentWorkout.actions;
