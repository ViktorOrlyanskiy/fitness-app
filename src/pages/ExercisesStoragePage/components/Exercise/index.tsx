import { FC, useState } from 'react';
import { IGroupExercises } from 'shared/models';
import ListItem from 'shared/components/ListItem';
import { SvgGenerator, variant } from 'shared/components/ui/SvgGenerator';
import TouchWrapper from 'shared/components/TouchWrapper';
import ButtonsBack from 'shared/components/ButtonsBack';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import './exercise.scss';
import { _update_group_exercises } from 'store/actions';
import { set_is_fetch_groups_exercises } from 'store/reducers/fetch';

interface ExerciseProps {
    id: number;
    name: string;
    type: string;
    group: IGroupExercises;
    handleClickExercise: (name: string, isActive: boolean) => void;
}

const Exercise: FC<ExerciseProps> = ({
    id,
    name,
    type,
    group,
    handleClickExercise,
}) => {
    const dispatch = useAppDispatch();
    const [isActive, setActive] = useState(false);
    const user = useAppSelector((state) => state.user);

    const handleClick = () => {
        handleClickExercise(id + '*' + name, isActive);
        setActive(!isActive);
    };

    const handleBtnDelete = () => {
        const newList = group?.list?.filter((exercise) => exercise.id !== id);

        if (user.uid) {
            dispatch(
                _update_group_exercises({
                    userId: user.uid,
                    group: { name: group.name, list: newList },
                })
            );
            dispatch(set_is_fetch_groups_exercises(true));
        }
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
        <TouchWrapper
            id={id}
            offset={42}
            front={
                <div className="exercise" onClick={handleClick}>
                    <ListItem
                        status={isActive ? 'selected' : undefined}
                        title={name}
                        rightElement={getStars(type)}
                    />
                </div>
            }
            back={<ButtonsBack handleDelete={handleBtnDelete} />}
        />
    );
};
export default Exercise;
