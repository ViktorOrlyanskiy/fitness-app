import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGroupExercises } from 'shared/models';
import { exercises } from 'shared/constants/exercises';
import { _fetch_groups_exercises } from 'store/actions/exercisesStorageActions/_fetch_groups_exercises_async';

const initialState: IGroupExercises[] = [];

//
const exercisesStorage = createSlice({
    name: 'exercisesStorage',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            _fetch_groups_exercises.pending,
            (state, { payload }: PayloadAction<any>) => {
                console.log('pending');
            }
        );
        builder.addCase(
            _fetch_groups_exercises.fulfilled,
            (state, { payload }: PayloadAction<any>) => {
                console.log('fulfilled');
                return [...payload];
            }
        );
        builder.addCase(
            _fetch_groups_exercises.rejected,
            (state, { payload }: PayloadAction<any>) => {
                console.log(payload);
                return [...exercises];
            }
        );
    },
});

export default exercisesStorage.reducer;
