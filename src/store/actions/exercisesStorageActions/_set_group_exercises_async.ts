import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IGroupExercises } from 'shared/models';

interface ArgFunc {
    userId: string;
    group: IGroupExercises;
}

export const _set_group_exercises = createAsyncThunk(
    'exercisesStorage/_set_group_exercises',
    async function ({ userId, group }: ArgFunc) {
        const userRef = doc(db, 'users', `${userId}`);
        await setDoc(doc(userRef, 'exercises', `${group.name}`), {
            ...group,
        });
    }
);
