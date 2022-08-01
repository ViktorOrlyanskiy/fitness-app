import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks/useRedux';
import {
    change_exercise,
    remove_exercise,
    change_active_exercise,
} from 'store/reducers/listExercises';
import { IExercise } from 'shared/types';

import { SvgGenerator, variant } from 'shared/components/ui/SvgGenerator';
import TouchWrapper from 'shared/components/TouchWrapper';
import { URL } from 'shared/constants/URL';
import './exercise.scss';
import ListItem from 'shared/components/ListItem';
import ButtonBack from 'shared/components/ButtonBack';

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

    return (
        <TouchWrapper
            id={id}
            offset={42}
            duration="0.3s"
            front={
                <ListItem
                    status={isActive ? 'selected' : undefined}
                    title={name}
                    handlerClick={changeExercise}
                    rightElement={
                        <div className="exercise__amount-sets">
                            {sets?.length}
                        </div>
                    }
                />
            }
            back={<ButtonBack handlerDelete={handlerBtnDelete} />}
        />
    );
};
export default Exercise;
