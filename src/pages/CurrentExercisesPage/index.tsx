import { FC, useState } from 'react';
import { useAppSelectors } from 'hooks/useRedux';
import { URL } from 'shared/constants/URL';

import Header from 'shared/components/Header';
import Footer from 'shared/components/Footer';
import Exercise from './components/Exercise';
import ExerciseActive from './components/ExerciseActive';

import './list-exercises.scss';

const ListExercises: FC = () => {
    const [isActive, setActive] = useState<boolean>(false);
    const { listExercises } = useAppSelectors();

    return (
        <div className="list-exercises">
            <Header
                previousPage={URL.current_workout}
                btnRight={isActive ? undefined : 'pencil'}
                btnEvent={() => (isActive ? setActive(false) : setActive(true))}
                children={'Список упражнений'}
            />

            <div className="page-container">
                {listExercises.length > 0 ? (
                    isActive ? (
                        listExercises.map((exercise) => (
                            <ExerciseActive key={exercise.id} {...exercise} />
                        ))
                    ) : (
                        listExercises.map((exercise) => (
                            <Exercise key={exercise.id} {...exercise} />
                        ))
                    )
                ) : (
                    <div className="notification-text">Добавьте упражения</div>
                )}
            </div>

            <Footer nextPage={URL.exercises_storage}>Добавить упражение</Footer>
        </div>
    );
};
export default ListExercises;
