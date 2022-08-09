import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { _fetch_workouts } from 'store/actions/listWorkoutsActions/_fetch_workouts_async';
import { IWorkout } from 'shared/models';

const initialState: IWorkout[] = [];

// получает список тренировок с сервера
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
