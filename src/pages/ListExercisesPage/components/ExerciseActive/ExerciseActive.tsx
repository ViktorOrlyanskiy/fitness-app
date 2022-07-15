import { FC } from 'react';
import { useAppDispatch } from 'hooks';
import { IExercise } from 'types';
import {
    change_active_exercise,
    remove_exercise,
} from 'store/slices/listExercises';

import {
    SvgGenerator,
    svgVariant,
} from 'component/UI/SvgGenerator/SvgGenerator';
import './ExerciseActive.scss';

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
                <SvgGenerator id={svgVariant.circleMinus} />
            </div>
            <div className="exercise__title">{name}</div>
            <div className="exercise__amount-sets">
                <SvgGenerator id={svgVariant.circleUp} />
            </div>
        </div>
    );
};
export default ExerciseActive;
