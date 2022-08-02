import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    workouts: true,
    exercises: true,
};

// контролирует количество запросов к серверу
const fetch = createSlice({
    name: 'fetch',
    initialState,
    reducers: {
        set_fetch_workouts: (state, { payload }: PayloadAction<boolean>) => {
            state.workouts = payload;
        },
        set_fetch_exercises: (state, { payload }: PayloadAction<boolean>) => {
            state.exercises = payload;
        },
    },
});

export default fetch.reducer;
export const { set_fetch_workouts, set_fetch_exercises } = fetch.actions;
