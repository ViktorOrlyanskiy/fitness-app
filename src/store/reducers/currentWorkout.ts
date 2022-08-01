import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCurrentDate } from '../actions/currentWorkoutAction';

interface ICurrentWorkout {
    id: number | null;
    name: string;
    date: string;
}

const initialState: ICurrentWorkout = {
    id: null,
    name: '',
    date: '',
};

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
            if (payload.length > 0) {
                state.name = payload;
            }
        },
    },
});

export default CurrentWorkout.reducer;
export const { clear_current_workout, create_id, save_name } =
    CurrentWorkout.actions;
