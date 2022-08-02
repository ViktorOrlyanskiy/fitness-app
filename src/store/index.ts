import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import listExercises from './reducers/listExercises';
import listWorkouts from './reducers/listWorkouts';
import currentWorkout from './reducers/currentWorkout';
import user from './reducers/user';
import touchWrapper from './reducers/touchWrapper';
import editSet from './reducers/editSet';
import fetch from './reducers/fetch';
import exercisesStorage from './reducers/exercisesStorage';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['fetch', 'touchWrapper', 'editSet'],
};

const rootReducer = combineReducers({
    listWorkouts: listWorkouts,
    listExercises: listExercises,
    currentWorkout: currentWorkout,
    exercisesStorage: exercisesStorage,
    user: user,
    touchWrapper: touchWrapper,
    editSet: editSet,
    fetch: fetch,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});
export const persistor = persistStore(store);

// экспорты для hooks/useRedux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
