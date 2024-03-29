import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: number = 0;

// используется для автоматического возврата смещенного front слоя
const touchWrapper = createSlice({
    name: 'touchWrapper',
    initialState,
    reducers: {
        set_offset: (state, { payload }: PayloadAction<number>) => {
            return payload;
        },
    },
});

export default touchWrapper.reducer;
export const { set_offset } = touchWrapper.actions;
