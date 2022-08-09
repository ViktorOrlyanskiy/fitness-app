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
        set_is_fetch_workouts: (state, { payload }: PayloadAction<boolean>) => {
            state.workouts = payload;
        },
        set_is_fetch_groups_exercises: (
            state,
            { payload }: PayloadAction<boolean>
        ) => {
            state.exercises = payload;
        },
    },
});

export default fetch.reducer;
export const { set_is_fetch_workouts, set_is_fetch_groups_exercises } =
    fetch.actions;
