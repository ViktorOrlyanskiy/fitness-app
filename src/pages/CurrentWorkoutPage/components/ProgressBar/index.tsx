import { FC, useState, useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelectors } from 'hooks/useRedux';
import { IExercise, ISet } from 'shared/models';
import {
    getActiveExercise,
    searchOnePrevExercise,
    getTotalSumSet,
} from 'shared/helpers';
import './progress-bar.scss';
import {
    set_block_exercise_id,
    set_prevent_exercise,
} from 'store/reducers/currentWorkout';

export const ProgressBar: FC = () => {
    const dispatch = useAppDispatch();
    const [percent, setPercent] = useState(0);
    const { currentWorkout, listExercises, listWorkouts } = useAppSelectors();
    const { id, sets } = getActiveExercise(listExercises);

    const getPercent = useCallback(
        (prevSets: ISet[] | undefined) => {
            if (prevSets && prevSets.length > 0) {
                return Math.round(
                    (getTotalSumSet(sets) / getTotalSumSet(prevSets)) * 100
                );
            } else {
                return 0;
            }
        },
        [sets]
    );

    const getStyles = (percent: number) => {
        if (percent > 0 && percent < 100) {
            return {
                width: percent + '%',
                border: '1px solid #bebebe',
                background: '#bebebe',
            };
        } else if (percent === 0) {
            return {
                width: '0%',
                border: 'none',
                background: '#bebebe',
            };
        } else {
            return {
                width: '100.7%',
                border: '1px solid #ffffff',
                background: '#ffffff',
            };
        }
    };

    useEffect(() => {
        const { preventExercises, blockExerciseId } = currentWorkout;

        // проверяет есть ли упражнение в block
        if (blockExerciseId && blockExerciseId.includes(id)) {
            setPercent(0);
        }

        // проверяет есть ли упражнение в store
        else if (preventExercises) {
            const prevExercise: IExercise | undefined = preventExercises.find(
                (exercise) => exercise.id === id
            );

            // ищет упражение в предыдущих тренировках
            if (!prevExercise) {
                const newPrevExercise = searchOnePrevExercise(listWorkouts, id);

                // если не нашел -> заносит id в block
                if (newPrevExercise && typeof newPrevExercise === 'number') {
                    dispatch(set_block_exercise_id(newPrevExercise));
                    setPercent(0);
                }
                // если нашел -> сохраняет упраженение в store
                else if (
                    newPrevExercise &&
                    typeof newPrevExercise !== 'number'
                ) {
                    dispatch(set_prevent_exercise(newPrevExercise));
                    setPercent(getPercent(newPrevExercise?.sets));
                }
            }
            // использует упражение из store
            else {
                setPercent(getPercent(prevExercise?.sets));
            }
        }
    }, [dispatch, sets, id, listWorkouts, currentWorkout, getPercent]);

    return (
        <div className="progress-bar">
            <div className="progress-bar__line">
                <div
                    className="progress-bar__line--front"
                    style={getStyles(percent)}></div>
            </div>
            <div className="progress-bar__percent">{percent}%</div>
        </div>
    );
};
