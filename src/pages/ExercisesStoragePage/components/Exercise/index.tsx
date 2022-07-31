import { FC, useState } from 'react';
import ListItem from 'shared/components/ListItem';
import { SvgGenerator, variant } from 'shared/components/ui/SvgGenerator';
import './exercise.scss';

interface ExerciseProps {
    id: number;
    name: string;
    handlerClickExercise: (name: string, isActive: boolean) => void;
}

const Exercise: FC<ExerciseProps> = ({ id, name, handlerClickExercise }) => {
    const [isActive, setActive] = useState<boolean>(false);

    const handlerClick = () => {
        handlerClickExercise(id + '*' + name, isActive);
        setActive(!isActive);
    };

    return (
        <div className="exercise" onClick={handlerClick}>
            <ListItem status={isActive ? 'selected' : undefined} title={name} />
        </div>
    );
};
export default Exercise;
