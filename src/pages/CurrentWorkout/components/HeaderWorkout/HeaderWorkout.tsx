import React from "react";
import { IWorkout } from "types";
import { useAppDispatch, useAppSelector } from "hooks/index";
import { addWorkout } from "store/listWorkouts";
import Header from "component/Header/Header";

import "./HeaderWorkout.scss";


const HeaderWorkout = ({ }) => {
    const dispatch = useAppDispatch();
    const listWorkouts = useAppSelector(state => state.listWorkouts);
    const listExercises = useAppSelector(state => state.listExercises)

    console.log(listExercises);


    const finishWorkout = () => {
        const workout: IWorkout = {
            id: Date.now(),
            name: 'тренировка 1',
            date: '21.06.22',
            time: '0',
            listExercises: [],
        }

        // dispatch(stopStopwatchAction());
        dispatch(addWorkout(workout));

        // dispatch(clearListExercisesAction());
        // navigate('/list-workouts');
    };


    return (
        <div className="current-workout__header">
            <Header
                to={'/list-workouts'}
                btnReight={'flag-checkered'}
                btnEvent={finishWorkout}
            >Тренировка
            </Header>
        </div>
    );
};
export default HeaderWorkout;