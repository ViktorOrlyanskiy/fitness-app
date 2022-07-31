import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks/useRedux';
import {
    change_exercise,
    remove_exercise,
    change_active_exercise,
} from 'store/slices/listExercises';
import { IExercise } from 'shared/types';

import { SvgGenerator, variant } from 'shared/components/ui/SvgGenerator';
import TouchWrapper from 'shared/components/TouchWrapper';
import { URL } from 'shared/constants/URL';
import './exercise.scss';
import ListItem from 'shared/components/ListItem';

interface ExerciseProps extends IExercise {}

const Exercise: FC<ExerciseProps> = ({ id, name, isActive, sets }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const changeExercise = () => {
        dispatch(change_exercise(id));
        navigate(URL.current_workout);
    };

    const handlerBtnDelete = () => {
        dispatch(remove_exercise({ id, isActive }));
        dispatch(change_active_exercise());
    };

    const getActiveExercise = (status: boolean) => {
        return status ? (
            <div className="exercise__active exercise__active_active">
                <SvgGenerator id={variant.check} />
            </div>
        ) : (
            <div className="exercise__active"></div>
        );
    };

    return (
        <TouchWrapper
            id={id}
            offset={42}
            duration="0.3s"
            front={
                <ListItem
                    status="selected"
                    title={name}
                    rightElement={
                        <div className="exercise__amount-sets">
                            {sets?.length}
                        </div>
                    }
                />
            }
            back={
                <div className="exercise__btns btn-back-line">
                    <div
                        className="btn-back-line__delete"
                        onClick={handlerBtnDelete}>
                        <SvgGenerator id={variant.trash_xmart} />
                    </div>
                </div>
            }
        />
    );
};
export default Exercise;
