import { FC } from 'react';
import { SvgGenerator, variant } from 'component/UI/SvgGenerator/SvgGenerator';
import TouchWrapper from 'shared/components/TouchWrapper';
import './Workout.scss';

interface WorkoutProps {
    name: string;
    date: string;
    scheduled: boolean;
}

const Workout: FC<WorkoutProps> = ({ name, date, scheduled }) => {
    return (
        <TouchWrapper
            scheduled
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
                    <div className="btn__delete">
                        <SvgGenerator id={variant.trash_can} />
                    </div>
                </div>
            }
        />
    );
};
export default Workout;
