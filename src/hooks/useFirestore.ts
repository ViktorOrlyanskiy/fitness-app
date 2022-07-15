import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { useAppDispatch, useAppSelectors } from 'hooks/useRedux';
import { clear_workouts, set_workouts } from 'store/slices/listWorkouts';
import { IWorkout } from 'types';
import { db } from '../firebase';

/*
 * записать новую тренировку +
 * получить список тренировок +
 * записать полученный список в store
 */

// переписать без использования JSON (проверить производительность)
export const useFirestore = () => {
    const dispatch = useAppDispatch();
    const { user, listWorkouts } = useAppSelectors();
    // const listWorkoutsFirestore: IWorkout[] = [];
    const userRef = doc(db, 'users', `${user.uid}`);

    const saveNewWorkout = async (workout: IWorkout) => {
        await setDoc(doc(userRef, 'workouts', `${workout.id}`), {
            id: workout.id,
            date: workout.date,
            body: JSON.stringify(workout),
        });
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
    return { saveNewWorkout, getAllWorkouts };
};
