import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const _fetch_groups_exercises = createAsyncThunk(
    'listWorkouts/_fetch_groups_exercises',
    async function (userId: string) {
        const userRef = doc(db, 'users', `${userId}`);
        const exercises: any[] = [];

        const queryDataInFirestore = async () => {
            return await getDocs(collection(userRef, 'exercises'));
        };

        return await queryDataInFirestore()
            .then((result) => {
                result.forEach((doc) => {
                    exercises.push(doc.data());
                });
                return exercises;
            })
            .catch((error) => {
                return error.message;
            });
    }
);
