import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks/useRedux';
import {
    change_exercise,
    remove_exercise,
    change_active_exercise,
} from 'store/reducers/listExercises';
import { IExercise } from 'shared/models';
import { URL } from 'shared/constants/URL';

import TouchWrapper from 'shared/components/TouchWrapper';
import ListItem from 'shared/components/ListItem';
import ButtonsBack from 'shared/components/ButtonsBack';
import './exercise.scss';

const Exercise: FC<IExercise> = ({ id, name, isActive, sets }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const changeExercise = () => {
        dispatch(change_exercise(id));
        navigate(URL.current_workout);
    };

    const handleBtnDelete = () => {
        dispatch(remove_exercise({ id, isActive }));
        dispatch(change_active_exercise());
    };

    return (
        <TouchWrapper
            id={id}
            offset={42}
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
            back={<ButtonsBack handleDelete={handleBtnDelete} />}
        />
    );
};
export default Exercise;
