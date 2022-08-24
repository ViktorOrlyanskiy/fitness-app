import { FC, useState, useEffect } from 'react';
import { useAppDispatch, useAppSelectors } from 'hooks/useRedux';
import { IExercise, ISet } from 'shared/models';
import { getActiveExercise } from 'shared/utils';
import './progress-bar.scss';
import {
    set_block_exercise_id,
    set_prevent_exercise,
} from 'store/reducers/currentWorkout';

export const ProgressBar: FC = ({}) => {
    const dispatch = useAppDispatch();
    const [percent, setPercent] = useState(0);
    const { currentWorkout, listExercises, listWorkouts } = useAppSelectors();
    const activeExercise = getActiveExercise(listExercises);
    const sets = activeExercise?.sets;

    const searchPrevExercise = () => {
        let findExercise: IExercise | undefined;
        let blockExerciseId: number | undefined;
        outer: for (let i = listWorkouts.length - 1; i > 0; i--) {
            const exercises = listWorkouts[i].listExercises;
            if (exercises) {
                for (const exercise of exercises) {
                    if (exercise.id === activeExercise.id) {
                        findExercise = exercise;
                        break outer;
                    } else {
                        blockExerciseId = activeExercise.id;
                    }
                }
            }
        }
        return findExercise ? findExercise : blockExerciseId;
    };

    const totalSum = (sets: ISet[] | undefined) => {
        let totalSum = 0;
        if (sets) {
            sets?.forEach((set) => {
                totalSum += +set.weight * +set.amount;
            });
        }
        return totalSum;
    };

    const getPercent = (prevSets: ISet[] | undefined) => {
        if (prevSets && prevSets.length > 0) {
            return Math.round((totalSum(sets) / totalSum(prevSets)) * 100);
        } else {
            return 0;
        }
    };

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
        if (blockExerciseId && blockExerciseId.includes(activeExercise.id)) {
            setPercent(0);
        }

        // проверяет есть ли упражнение в store
        else if (preventExercises) {
            const prevExercise: IExercise | undefined = preventExercises.find(
                (exercise) => exercise.id === activeExercise.id
            );

            // ищет упражение в предыдущих тренировках
            if (!prevExercise) {
                const newPrevExercise = searchPrevExercise();

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
    }, [sets]);

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
