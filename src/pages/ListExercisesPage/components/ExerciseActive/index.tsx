import { FC } from 'react';
import { useAppDispatch } from 'hooks/useRedux';
import { IExercise } from 'shared/types';
import {
    change_active_exercise,
    remove_exercise,
} from 'store/slices/listExercises';

import { SvgGenerator, variant } from 'shared/components/ui/SvgGenerator';
import './exercise-active.scss';

interface ExerciseProps extends IExercise {}

const ExerciseActive: FC<ExerciseProps> = ({ id, name, isActive }) => {
    const dispatch = useAppDispatch();

    const removeExercise = () => {
        dispatch(remove_exercise({ id, isActive }));
        dispatch(change_active_exercise());
    };

    return (
        <div className="exercise exercise-active">
            <div className="exercise__active" onClick={removeExercise}>
                <SvgGenerator id={variant.circle_minus} />
            </div>
            <div className="exercise__title">{name}</div>
            <div className="exercise__amount-sets">
                <SvgGenerator id={variant.circle_up} />
            </div>
        </div>
    );
};
export default ExerciseActive;
