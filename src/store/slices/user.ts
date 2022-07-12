import { createSlice } from '@reduxjs/toolkit';
import { IUser } from 'types';

const initialState: IUser = {
    email: '',
    accessToken: '',
    uid: '',
};

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        set_user: (state, { payload }) => {
            return (state = { ...payload });
        },
        remove_user: (state) => {
            return (state = { ...initialState });
        },
    },
});

export default user.reducer;
export const { set_user, remove_user } = user.actions;
