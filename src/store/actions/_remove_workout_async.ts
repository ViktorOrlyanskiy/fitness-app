import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface ArgFunc {
    userId: string;
    workoutId: number;
}

export const _remove_workout = createAsyncThunk(
    'listWorkouts/_remove_workout',
    async function ({ userId, workoutId }: ArgFunc) {
        const userRef = doc(db, 'users', `${userId}`);

        await deleteDoc(doc(userRef, 'workouts', `${workoutId}`));
    }
);
