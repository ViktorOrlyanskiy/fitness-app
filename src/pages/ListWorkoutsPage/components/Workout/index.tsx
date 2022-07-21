import { FC } from 'react';
import { useFirestore } from 'hooks/useFirestore';
import { useAppDispatch } from 'hooks/useRedux';
import { remove_workout } from 'store/slices/listWorkouts';

import { SvgGenerator, variant } from 'shared/components/ui/SvgGenerator';
import TouchWrapper from 'shared/components/TouchWrapper';
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

    const handlerDeleteBtn = () => {
        dispatch(remove_workout(id));
        removeWorkout(id);
    };

    return (
        <TouchWrapper
            id={id}
            offset={isScheduled ? 126 : 84}
            front={
                <div className="workout">
                    <div className="workout__status">
                        <SvgGenerator id={variant.circle_check} />
                    </div>
                    <div className="workout__title">{name}</div>
                    <div className="workout__date">{date}</div>
                </div>
            }
            back={
                <div className="workout__btns btn">
                    <div className="btn__play">
                        <SvgGenerator id={variant.play} />
                    </div>
                    <div className="btn__copy">
                        <SvgGenerator id={variant.copy} />
                    </div>
                    <div className="btn__delete" onClick={handlerDeleteBtn}>
                        <SvgGenerator id={variant.trash_can} />
                    </div>
                </div>
            }
        />
    );
};
export default Workout;
