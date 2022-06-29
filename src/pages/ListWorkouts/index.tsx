import { FC } from "react";
import { IWorkout } from "types";
import { useNavigate } from "react-router-dom";

import Header from "component/Header/Header";
import Workout from "./components/Workout";

import "./styles/ListWorkouts.scss";


const ListWorkouts: FC = () => {

    const navigate = useNavigate();
    const listWorkouts: IWorkout[] = [
        { id: 1, name: 'тренировка 1', date: '24.05.22', },
        { id: 2, name: 'тренировка 1', date: '24.05.22', },
    ]

    const startWorkout = () => {
        // dispatch(startStopwatchAction());
        // navigate('/list-exercises');
    }


    return (
        <div className="list-workouts">
            <Header
                previousPage={'/'}
                btnLeft={'bars'}
                btnReight={'plus'}
                btnEvent={startWorkout}
            >Список тренировок
            </Header>

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