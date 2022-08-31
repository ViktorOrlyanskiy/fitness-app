import { FC, useMemo } from 'react';
import { useAppSelectors } from 'hooks/useRedux';
import { URL } from 'shared/constants/URL';
import { getActiveExercise, searchAllPrevExercises } from 'shared/utils';

import Header from 'shared/components/Header';
import SetHistory from './components/SetHistory';
import { ChartSets } from './components/ChartSets';
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
                <ChartSets exercises={foundExercises} dates={foundDates} />
                {foundExercises.length &&
                    foundExercises.map((exercise, index) => (
                        <SetHistory
                            key={index}
                            date={foundDates[index]}
                            exercise={exercise}
                        />
                    ))}
            </div>
        </div>
    );
};
export default ExerciseStatistics;
