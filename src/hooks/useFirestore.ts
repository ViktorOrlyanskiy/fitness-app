import {
    collection,
    doc,
    getDocs,
    setDoc,
    deleteDoc,
} from 'firebase/firestore';
import { db } from '../firebase';
import { useAppDispatch, useAppSelectors } from 'hooks/useRedux';
import { clear_workouts, set_workouts } from 'store/slices/listWorkouts';
import { IWorkout } from 'shared/types';

// переписать без использования JSON (проверить производительность)
export const useFirestore = () => {
    const dispatch = useAppDispatch();
    const { user, listWorkouts } = useAppSelectors();
    const userRef = doc(db, 'users', `${user.uid}`);

    const saveNewWorkout = async (workout: IWorkout) => {
        await setDoc(doc(userRef, 'workouts', `${workout.id}`), {
            id: workout.id,
            date: workout.date,
            body: JSON.stringify(workout),
        });
    };

    const removeWorkout = async (id: number) => {
        await deleteDoc(doc(userRef, 'workouts', `${id}`));
    };

    const getAllWorkouts = () => {
        const listWorkoutsFirestore: IWorkout[] = [];

        const queryDataInFirestore = async () => {
            return await getDocs(collection(userRef, 'workouts'));
        };
        queryDataInFirestore()
            .then((result) => {
                result.forEach((doc) => {
                    const workout = doc.data();
                    listWorkoutsFirestore.push(JSON.parse(workout.body));
                });

                if (listWorkoutsFirestore.length !== listWorkouts.length) {
                    dispatch(clear_workouts());
                    dispatch(set_workouts(listWorkoutsFirestore));
                    listWorkoutsFirestore.length = 0;
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                // лоадер???
            });
    };
    return { saveNewWorkout, getAllWorkouts, removeWorkout };
};
