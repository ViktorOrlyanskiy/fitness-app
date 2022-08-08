import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IWorkout } from 'shared/types';

interface ArgFunc {
    userId: string;
    workout: IWorkout;
}

export const _set_workouts = createAsyncThunk(
    'listWorkouts/_set_workout',
    async function ({ userId, workout }: ArgFunc) {
        const userRef = doc(db, 'users', `${userId}`);

        await setDoc(doc(userRef, 'workouts', `${workout.id}`), {
            ...workout,
        });
    }
);
