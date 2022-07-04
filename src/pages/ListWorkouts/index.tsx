import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "hooks";

import Header from "component/Header/Header";
import Workout from "./components/Workout";

import "./styles/ListWorkouts.scss";


const ListWorkouts: FC = () => {

    const navigate = useNavigate();
    const listWorkouts = useAppSelector(state => state.listWorkouts);
    const listExercises = useAppSelector(state => state.listExercises);


    const startWorkout = () => {
        // dispatch(startStopwatchAction());
        navigate('/list-exercises');
    }

    const goToCurrentWorkout = () => {
        navigate('/current-workout')
    }

    return (
        <div className="list-workouts">
            <Header
                previousPage={'/'}
                btnLeft={'bars'}
                btnReight={(listExercises.length > 0) ? 'angles-right' : 'plus'}
                btnEvent={(listExercises.length > 0) ? goToCurrentWorkout : startWorkout}
                children={'Список тренировок'}
            />
            <div className="list-workouts__body">
                {(listWorkouts.length > 0) && (
                    listWorkouts.map(workout =>
                        <Workout key={workout.id} {...workout} />)
                )}
            </div>
        </div >
    )
};

export default ListWorkouts;