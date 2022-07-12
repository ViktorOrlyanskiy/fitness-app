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

import listExercises from './slices/listExercises';
import listWorkouts from './slices/listWorkouts';
import currentWorkout from './slices/currentWorkout';
import user from './slices/user';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    listWorkouts: listWorkouts,
    listExercises: listExercises,
    currentWorkout: currentWorkout,
    user: user,
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

// экспорты для hooks/index.ts
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
