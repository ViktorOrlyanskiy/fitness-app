import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGroupExercises } from 'shared/types';
import { exercises } from 'shared/constants/exercises';
import { _fetch_exercises } from 'store/actions/exercisesStorageActions/_fetch_exercises_async';

const initialState: IGroupExercises[] = [];

//
const exercisesStorage = createSlice({
    name: 'exercisesStorage',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            _fetch_exercises.pending,
            (state, { payload }: PayloadAction<any>) => {
                console.log('pending');
            }
        );
        builder.addCase(
            _fetch_exercises.fulfilled,
            (state, { payload }: PayloadAction<any>) => {
                console.log('fulfilled');
                return [...payload];
            }
        );
        builder.addCase(
            _fetch_exercises.rejected,
            (state, { payload }: PayloadAction<any>) => {
                console.log(payload);
                return [...exercises];
            }
        );
    },
});

export default exercisesStorage.reducer;
export const {} = exercisesStorage.actions;
