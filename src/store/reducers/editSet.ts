import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISet } from 'shared/types';

interface IEditSet {
    id?: number;
    weight?: string;
    amount?: string;
    comment?: string;
}

const initialState: IEditSet = {};

// используется для редактирования сета
const editSet = createSlice({
    name: 'editSet',
    initialState,
    reducers: {
        save_service_set: (state, { payload }: PayloadAction<ISet>) => {
            return { ...payload };
        },
        clear_service_set: () => {
            return { ...{} };
        },
    },
});

export default editSet.reducer;
export const { save_service_set, clear_service_set } = editSet.actions;
