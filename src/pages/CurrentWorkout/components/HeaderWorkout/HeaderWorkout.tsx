import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks/index";
import { IWorkout } from "types";
import { add_workout } from "store/listWorkouts";
import { clear_list_exercises } from "store/listExercises";

import Header from "component/Header/Header";
import SelectEcercise from "../SelectExercise/SelectExercise";

import "./HeaderWorkout.scss";




const HeaderWorkout: FC<{ name: string }> = ({ name }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const listExercises = useAppSelector(state => state.listExercises)


    const finishWorkout = () => {
        const workout: IWorkout = {
            id: Date.now(),
            name: 'тренировка 1',
            date: '21.06.22',
            time: '0',
            listExercises,
        }

        // dispatch(stopStopwatchAction());
        dispatch(add_workout(workout));
        dispatch(clear_list_exercises());
        navigate('/list-workouts');
    };


    return (
        <div className="current-workout__header">
            <Header
                previousPage={'/list-workouts'}
                btnReight={'flag-checkered'}
                btnEvent={finishWorkout}
                children={'Тренировка'}
            />
            <SelectEcercise name={name} />
        </div>
    );
};
export default HeaderWorkout;