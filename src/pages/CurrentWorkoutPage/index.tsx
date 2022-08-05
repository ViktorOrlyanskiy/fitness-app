import { FC, useState } from 'react';
import { useAppSelectors } from 'hooks/useRedux';

import MyButton from 'shared/components/ui/MyButton';
import HeaderWorkout from './components/HeaderWorkout';
import ModalAddSet from './components/ModalAddSet';
import Set from './components/Set';
import './current-workout.scss';

const CurrentWorkout: FC = () => {
    const [isOpenModal, setOpenModal] = useState(false);
    const { listExercises } = useAppSelectors();
    const activeExercise = listExercises.filter(
        (exercise) => exercise.isActive
    )[0];
    const sets = activeExercise?.sets;

    return (
        <div className="current-workout">
            <HeaderWorkout
                name={
                    activeExercise ? activeExercise.name : 'Добавить упражение'
                }
            />
            <div className="page-container">
                {sets &&
                    sets.length > 0 &&
                    sets.map((set, index) => (
                        <Set
                            key={set.id}
                            index={++index}
                            setOpenModal={setOpenModal}
                            {...set}
                        />
                    ))}
            </div>

            <div className="current-workout__button" hidden={isOpenModal}>
                <MyButton onClick={() => setOpenModal(!isOpenModal)}>
                    Добавить подход
                </MyButton>
            </div>

            <ModalAddSet isOpen={isOpenModal} setOpen={setOpenModal} />
        </div>
    );
};

export default CurrentWorkout;
