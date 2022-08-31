import { FC, useMemo } from 'react';
import { useAppSelectors } from 'hooks/useRedux';
import { URL } from 'shared/constants/URL';
import { getActiveExercise } from 'shared/helpers';
import Header from 'shared/components/Header';

import { searchAllPrevExercises } from './helpers';
import { ChartSets } from './components/ChartSets';
import { SetHistory } from './components/SetHistory';
import './exercise-statistics.scss';

const ExerciseStatistics: FC = () => {
    const { listExercises, listWorkouts } = useAppSelectors();
    const { id } = getActiveExercise(listExercises);

    const { foundExercises, foundDates } = useMemo(
        () => searchAllPrevExercises(listWorkouts, id),
        [listWorkouts, id]
    );

    return (
        <div className="exercise-statistics">
            <Header
                previousPage={URL.current_workout}
                children={'Статистика'}
            />
            <div className="page-container">
                {foundExercises.length ? (
                    <>
                        <ChartSets
                            exercises={foundExercises}
                            dates={foundDates}
                        />
                        {foundExercises.map((exercise, index) => (
                            <SetHistory
                                key={index}
                                date={foundDates[index]}
                                exercise={exercise}
                            />
                        ))}
                    </>
                ) : (
                    <div className="notification-text">
                        Слишком мало информации
                    </div>
                )}
            </div>
        </div>
    );
};
export default ExerciseStatistics;
