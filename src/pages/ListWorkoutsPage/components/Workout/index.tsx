import { FC } from 'react';
import { useFirestore } from 'hooks/useFirestore';
import { useAppDispatch } from 'hooks/useRedux';
import { remove_workout } from 'store/slices/listWorkouts';

import { SvgGenerator, variant } from 'shared/components/ui/SvgGenerator';
import TouchWrapper from 'shared/components/TouchWrapper';
import './workout.scss';
import ListItem from 'shared/components/ListItem';

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
                <div className="workout__btns btn-back-line">
                    <div className="btn-back-line__play">
                        <SvgGenerator id={variant.play} />
                    </div>
                    <div className="btn-back-line__copy">
                        <SvgGenerator id={variant.copy} />
                    </div>
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
export default Workout;
