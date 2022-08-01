import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { _fetch_workouts } from 'store/actions/_fetch_workouts_async';
import { IWorkout } from 'shared/types';

const initialState: IWorkout[] = [];

const listWorkouts = createSlice({
    name: 'listWorkouts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            _fetch_workouts.pending,
            (state, { payload }: PayloadAction<any>) => {
                console.log('pending');
            }
        );
        builder.addCase(
            _fetch_workouts.fulfilled,
            (state, { payload }: PayloadAction<any>) => {
                console.log('fulfilled');
                return [...payload];
            }
        );
        builder.addCase(
            _fetch_workouts.rejected,
            (state, { payload }: PayloadAction<any>) => {
                console.log(payload);
            }
        );
    },
});

export default listWorkouts.reducer;
export const {} = listWorkouts.actions;
