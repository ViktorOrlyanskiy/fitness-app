import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const _fetch_workouts = createAsyncThunk(
    'listWorkouts/_fetch_workouts',
    async function (userId: string) {
        const userRef = doc(db, 'users', `${userId}`);
        const workouts: any[] = [];

        const queryDataInFirestore = async () => {
            return await getDocs(collection(userRef, 'workouts'));
        };

        return await queryDataInFirestore()
            .then((result) => {
                result.forEach((doc) => {
                    workouts.push(doc.data());
                });
                return workouts;
            })
            .catch((error) => {
                return error.message;
            });
    }
);
