import { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { _remove_workout } from 'store/actions/_remove_workout_async';

import TouchWrapper from 'shared/components/TouchWrapper';
import ListItem from 'shared/components/ListItem';
import ButtonBack from 'shared/components/ButtonBack';
import './workout.scss';
import { _fetch_workouts } from 'store/actions/_fetch_workouts_async';
import { set_fetch_workouts } from 'store/reducers/fetch';

interface WorkoutProps {
    id: number;
    name: string;
    date: string;
    isScheduled: boolean;
}

const Workout: FC<WorkoutProps> = ({ id, name, date, isScheduled }) => {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user);

    const handlerBtnDelete = () => {
        if (user.uid) {
            dispatch(_remove_workout({ userId: user.uid, workoutId: id }));
            dispatch(set_fetch_workouts(true));
            dispatch(_fetch_workouts(user.uid));
        }
    };

    return (
        <TouchWrapper
            id={id}
            offset={isScheduled ? 126 : 84}
            duration={isScheduled ? '0.6s' : '0.5s'}
            front={
                <ListItem
                    status="selected"
                    title={name}
                    rightElement={<div className="workout__date">{date}</div>}
                />
            }
            back={
                <ButtonBack
                    handlerPlay={() => null}
                    handlerCopy={() => null}
                    handlerDelete={handlerBtnDelete}
                />
            }
        />
    );
};
export default Workout;
