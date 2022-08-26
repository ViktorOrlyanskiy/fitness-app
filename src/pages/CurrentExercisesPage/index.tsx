import { FC } from 'react';
import { useAppSelectors } from 'hooks/useRedux';
import { useNavigate } from 'react-router-dom';
import { URL } from 'shared/constants/URL';

import Header from 'shared/components/Header';
import Exercise from './components/Exercise';
import './list-exercises.scss';

const ListExercises: FC = () => {
    const navigate = useNavigate();
    const { listExercises } = useAppSelectors();

    return (
        <div className="list-exercises">
            <Header
                previousPage={URL.current_workout}
                btnRight="plus"
                handleBtnRight={() => navigate(URL.exercises_storage)}
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
        </div>
    );
};
export default ListExercises;
