import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IWorkout } from 'shared/types';

const initialState: IWorkout[] = [
    // { id: 1, name: 'Тренировка 1', date: '21.06.22', isScheduled: false, },
];

const listWorkouts = createSlice({
    name: 'ListWorkouts',
    initialState,
    reducers: {
        clear_workouts: (state) => {
            state.length = 0;
        },
        set_workouts: (state, { payload }: PayloadAction<IWorkout[]>) => {
            return [...payload];
        },
        add_workout: (state, action: PayloadAction<IWorkout>) => {
            state.push(action.payload);
        },
        remove_workout: (state, { payload }: PayloadAction<number>) => {
            return state.filter(({ id }) => id !== payload);
        },
    },
});

export default listWorkouts.reducer;
export const { add_workout, clear_workouts, set_workouts, remove_workout } =
    listWorkouts.actions;
