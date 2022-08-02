import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IExerciseStorage, IGroupExercises } from 'shared/types';

interface ArgFunc {
    userId: string;
    group: IGroupExercises;
}

export const _set_exercise = createAsyncThunk(
    'exercisesStorage/_set_exercise',
    async function ({ userId, group }: ArgFunc) {
        const userRef = doc(db, 'users', `${userId}`);

        await setDoc(doc(userRef, 'exercises', `${group.name}`), {
            ...group,
        });
    }
);
