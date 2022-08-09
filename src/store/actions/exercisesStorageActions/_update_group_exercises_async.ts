import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IGroupExercises } from 'shared/models';

interface ArgFunc {
    userId: string;
    group: IGroupExercises;
}

export const _update_group_exercises = createAsyncThunk(
    'exercisesStorage/_update_group_exercises',
    async function ({ userId, group }: ArgFunc) {
        const userRef = doc(db, 'users', `${userId}`);
        const groupRef = doc(userRef, 'exercises', `${group.name}`);

        await updateDoc(groupRef, { list: group.list });
    }
);
