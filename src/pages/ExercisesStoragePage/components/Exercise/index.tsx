import { FC, useState } from 'react';
import { IExerciseStorage } from 'shared/models';
import ListItem from 'shared/components/ListItem';
import { SvgGenerator, variant } from 'shared/components/ui/SvgGenerator';
import './exercise.scss';

interface ExerciseProps extends IExerciseStorage {
    handlerClickExercise: (name: string, isActive: boolean) => void;
}

const Exercise: FC<ExerciseProps> = ({
    id,
    name,
    type,
    handlerClickExercise,
}) => {
    const [isActive, setActive] = useState<boolean>(false);

    const handleClick = () => {
        handlerClickExercise(id + '*' + name, isActive);
        setActive(!isActive);
    };

    const getStars = (type: string) => {
        switch (type) {
            case 'basic':
                return (
                    <div className="exercise__stars">
                        <SvgGenerator id={variant.star} />
                        <SvgGenerator id={variant.star} />
                        <SvgGenerator id={variant.star} />
                    </div>
                );
            case 'auxiliary':
                return (
                    <div className="exercise__stars">
                        <SvgGenerator id={variant.star} />
                        <SvgGenerator id={variant.star} />
                    </div>
                );
            case 'corrective':
                return (
                    <div className="exercise__stars">
                        <SvgGenerator id={variant.star} />
                    </div>
                );
        }
    };

    return (
        <div className="exercise" onClick={handleClick}>
            <ListItem
                status={isActive ? 'selected' : undefined}
                title={name}
                rightElement={getStars(type)}
            />
        </div>
    );
};
export default Exercise;
