import { FC } from 'react';
import { useAppSelectors } from 'hooks/useRedux';
import { URL } from 'shared/constants/URL';
import { getActiveExercise, searchAllPrevExercises } from 'shared/utils';
import Header from 'shared/components/Header';
import SetHistory from './components/SetHistory';
import './exercise-statistics.scss';

const ExerciseStatistics: FC = ({}) => {
    const { listExercises, listWorkouts } = useAppSelectors();
    const activeExercise = getActiveExercise(listExercises);
    const { foundExercises, foundDates } = searchAllPrevExercises(
        listWorkouts,
        activeExercise.id
    );

    return (
        <div className="exercise-statistics">
            <Header
                previousPage={URL.current_workout}
                children={'Статистика'}
            />
            <div className="page-container">
                {foundExercises.length > 0 &&
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
