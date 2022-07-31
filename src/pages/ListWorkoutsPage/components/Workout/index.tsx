import { FC } from 'react';
import { useFirestore } from 'hooks/useFirestore';
import { useAppDispatch } from 'hooks/useRedux';
import { remove_workout } from 'store/slices/listWorkouts';

import TouchWrapper from 'shared/components/TouchWrapper';
import ListItem from 'shared/components/ListItem';
import ButtonBack from 'shared/components/ButtonBack';
import './workout.scss';

interface WorkoutProps {
    id: number;
    name: string;
    date: string;
    isScheduled: boolean;
}

const Workout: FC<WorkoutProps> = ({ id, name, date, isScheduled }) => {
    const dispatch = useAppDispatch();
    const { removeWorkout } = useFirestore();

    const handlerBtnDelete = () => {
        dispatch(remove_workout(id));
        removeWorkout(id);
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
