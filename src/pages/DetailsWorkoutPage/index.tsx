import { FC, useLayoutEffect, useState } from 'react';
import { useAppSelectors } from 'hooks/useRedux';
import { checkLengthString } from 'shared/components/ListItem/helpers';

import Header from 'shared/components/Header';
import { DetailsExercise } from 'shared/components/DetailsExercise';
import './details-workout.scss';

const DetailsWorkout: FC = () => {
    const [id, setId] = useState(0);
    const { listWorkouts } = useAppSelectors();
    const workout = listWorkouts.find((workout) => workout.id === id);
    const listExercises = workout?.listExercises;

    useLayoutEffect(() => {
        setId(+window.location.pathname.replace(/\D/g, ''));
    }, []);

    console.log(workout);

    return (
        <div className="details-workout">
            <Header>{workout?.name}</Header>
            <div className="page-container">
                <div className="details-workout__main-info">
                    <p>Дата: </p>
                    <p>Длительность: </p>
                    <p>Общий объем: </p>
                </div>

                {listExercises?.length &&
                    listExercises.map((exercise, index) => (
                        <DetailsExercise
                            key={index}
                            title={checkLengthString(
                                `${++index}. ${exercise.name}`,
                                25
                            )}
                            exercise={exercise}
                        />
                    ))}
            </div>
        </div>
    );
};
export default DetailsWorkout;
