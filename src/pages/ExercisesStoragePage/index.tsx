import React, { FC } from 'react';
import Header from 'shared/components/Header';
import Exercise from './components/Exercise';
import { URL } from 'shared/constants/URL';
import './exercises-storage.scss';

interface GroupProps {
    name: string;
    list: { id: number; name: string }[];
}

const Group: FC<GroupProps> = ({ name, list }) => {
    return (
        <div className="group">
            <div className="group__header">{name}</div>
            <ul className="group__list">
                {list.map((exercise) => (
                    <Exercise key={exercise.id} {...exercise} />
                ))}
            </ul>
        </div>
    );
};

const ExercisesStorage: FC = () => {
    const groups = [
        {
            name: 'Бедра',
            list: [
                { id: 1, name: 'Приседания' },
                { id: 2, name: 'Жим ногами' },
            ],
        },
        {
            name: 'Грудь',
            list: [
                { id: 1, name: 'Жим штанги' },
                { id: 2, name: 'Жим гантелей' },
            ],
        },
    ];

    return (
        <div className="exercises-storage">
            <Header
                previousPage={URL.list_workouts}
                children={'Выберите упражнение'}
            />
            <div className="page-container">
                {groups.map((group) => (
                    <Group key={group.name} {...group} />
                ))}
            </div>
        </div>
    );
};
export default ExercisesStorage;
