import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks/useRedux';
import { change_exercise } from 'store/slices/listExercises';
import { IExercise } from 'shared/types';

import { SvgGenerator, variant } from 'shared/components/ui/SvgGenerator';
import { URL } from 'shared/constants/URL';
import './exercise.scss';

interface ExerciseProps extends IExercise {}

const Exercise: FC<ExerciseProps> = ({ id, name, isActive, sets }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const changeExercise = () => {
        dispatch(change_exercise(id));
        navigate(URL.current_workout);
    };

    const getActiveExercise = (status: boolean) => {
        return status ? (
            <div className="exercise__active exercise__active_active">
                <SvgGenerator id={variant.circle_check} />
            </div>
        ) : (
            <div className="exercise__active"></div>
        );
    };

    return (
        <div className="exercise" onClick={changeExercise}>
            {getActiveExercise(isActive)}
            <div className="exercise__title">{name}</div>
            <div className="exercise__amount-sets">{sets?.length}</div>
        </div>
    );
};
export default Exercise;