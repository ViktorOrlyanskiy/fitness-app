import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { _remove_workout, _fetch_workouts } from 'store/actions';
import { set_is_fetch_workouts } from 'store/reducers/fetch';
import { URL } from 'shared/constants/URL';

import TouchWrapper from 'shared/components/TouchWrapper';
import ListItem from 'shared/components/ListItem';
import ButtonsBack from 'shared/components/ButtonsBack';
import './workout.scss';

interface WorkoutProps {
    id: number;
    name: string;
    date: string;
    isScheduled: boolean;
}

const Workout: FC<WorkoutProps> = ({ id, name, date, isScheduled }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user);

    const handleClick = () => navigate(`${URL.list_workouts}/${id}`);

    const handleBtnDelete = () => {
        if (user.uid) {
            dispatch(_remove_workout({ userId: user.uid, workoutId: id }));
            dispatch(set_is_fetch_workouts(true));
            dispatch(_fetch_workouts(user.uid));
        }
    };

    return (
        <TouchWrapper
            id={id}
            offset={isScheduled ? 126 : 84}
            front={
                <ListItem
                    status="selected"
                    title={name}
                    onClick={handleClick}
                    rightElement={<div className="workout__date">{date}</div>}
                />
            }
            back={
                <ButtonsBack
                    handlePlay={() => null}
                    handleCopy={() => null}
                    handleDelete={handleBtnDelete}
                />
            }
        />
    );
};
export default Workout;
