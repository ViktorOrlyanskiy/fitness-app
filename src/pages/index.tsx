import { Routes, Route } from 'react-router-dom';
import { useAppSelectors } from 'hooks/useRedux';

import Login from './LoginPage';
import Registration from './RegistrationPage';
import ListWorkouts from './ListWorkoutsPage';
import CurrentWorkout from './CurrentWorkoutPage';
import ListExercises from './ListExercisesPage';
import FormAddExercise from './FormAddingPage/FormAddExercise';
import FormAddSet from './FormAddingPage/FormAddSet';

const Routing = () => {
    const { user } = useAppSelectors();
    return (
        <>
            {user.isAuth ? (
                <Routes>
                    <Route path={'/'} element={<ListWorkouts />} />
                    <Route
                        path={'/current-workout'}
                        element={<CurrentWorkout />}
                    />
                    <Route
                        path={'/current-workout/add-set'}
                        element={<FormAddSet />}
                    />
                    <Route path={'/list-workouts'} element={<ListWorkouts />} />
                    <Route
                        path={'/list-exercises'}
                        element={<ListExercises />}
                    />
                    <Route
                        path={'/list-exercises/add-exercise'}
                        element={<FormAddExercise />}
                    />
                    <Route path={'*'} element={<ListWorkouts />} />
                </Routes>
            ) : (
                <Routes>
                    <Route path={'/'} element={<Login />} />
                    <Route path={'/registration'} element={<Registration />} />
                    <Route path={'*'} element={<Login />} />
                </Routes>
            )}
        </>
    );
};
export default Routing;
