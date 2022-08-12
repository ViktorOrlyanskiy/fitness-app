import { FC, useState } from 'react';
import { useAppSelectors } from 'hooks/useRedux';
import { useNavigate } from 'react-router-dom';
import { URL } from 'shared/constants/URL';

import Header from 'shared/components/Header';
import Exercise from './components/Exercise';
import MyButton from 'shared/components/ui/MyButton';
import './list-exercises.scss';

const ListExercises: FC = () => {
    const navigate = useNavigate();
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
                    listExercises.map((exercise) => (
                        <Exercise key={exercise.id} {...exercise} />
                    ))
                ) : (
                    <div className="notification-text">Добавьте упражения</div>
                )}
            </div>

            <div className="current-workout__button">
                <MyButton onClick={() => navigate(URL.exercises_storage)}>
                    Добавить упражение
                </MyButton>
            </div>
        </div>
    );
};
export default ListExercises;
