import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// контролирует количество запросов к серверу
const fetch = createSlice({
    name: 'fetch',
    initialState: true,
    reducers: {
        set_fetch: (state, { payload }: PayloadAction<boolean>) => {
            return payload;
        },
    },
});

export default fetch.reducer;
export const { set_fetch } = fetch.actions;
