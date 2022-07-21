import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISet } from 'shared/types';

interface IEditSet {
    id?: number;
    weight?: string;
    amount?: string;
    comment?: string;
}

const initialState: IEditSet = {};

const editSet = createSlice({
    name: 'editSet',
    initialState,
    reducers: {
        set_set: (state, { payload }: PayloadAction<ISet>) => {
            return { ...payload };
        },
        remove_set: () => {
            return { ...{} };
        },
    },
});

export default editSet.reducer;
export const { set_set, remove_set } = editSet.actions;
