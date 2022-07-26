import { FC, useState } from 'react';
import { useAppDispatch } from 'hooks/useRedux';
import { SvgGenerator, variant } from 'shared/components/ui/SvgGenerator';

import './exercise.scss';

interface ExerciseProps {
    id: number;
    name: string;
    handlerClickExercise: (name: string, isActive: boolean) => void;
}

const Exercise: FC<ExerciseProps> = ({ id, name, handlerClickExercise }) => {
    const [isActive, setActive] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const handlerClick = () => {
        handlerClickExercise(id + '*' + name, isActive);
        setActive(!isActive);
    };

    return (
        <div className="exercise" onClick={handlerClick}>
            <div
                className={
                    isActive
                        ? 'exercise__active exercise__active_active'
                        : 'exercise__active'
                }>
                {isActive && <SvgGenerator id={variant.circle_check} />}
            </div>
            <div className="exercise__title">{name}</div>
        </div>
    );
};
export default Exercise;
