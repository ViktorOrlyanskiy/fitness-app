import { FC, useState } from 'react';
import { IGroupExercises } from 'shared/models';
import ListItem from 'shared/components/ListItem';
import TouchWrapper from 'shared/components/TouchWrapper';
import ButtonsBack from 'shared/components/ButtonsBack';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import {
    _fetch_groups_exercises,
    _update_group_exercises,
} from 'store/actions';
import { getStars } from 'shared/helpers/getStars';
import './exercise.scss';

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
            dispatch(_fetch_groups_exercises(user.uid));
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
