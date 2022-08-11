import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppSelectors } from 'hooks/useRedux';
import { URL } from 'shared/constants/URL';

import ListWorkouts from './ListWorkoutsPage';
import CurrentWorkout from './CurrentWorkoutPage';
import CurrentExercises from './CurrentExercisesPage';
import ExercisesStorage from './ExercisesStoragePage';

const Login = lazy(() => import('./LoginPage'));
const Registration = lazy(() => import('./RegistrationPage'));

const Routing = () => {
    const { user } = useAppSelectors();
    return (
        <Suspense fallback={<div>Loading...</div>}>
            {user.isAuth ? (
                <Routes>
                    <Route path={URL.base} element={<ListWorkouts />} />
                    <Route
                        path={URL.current_workout}
                        element={<CurrentWorkout />}
                    />
                    <Route
                        path={URL.list_workouts}
                        element={<ListWorkouts />}
                    />
                    <Route
                        path={URL.current_exercises}
                        element={<CurrentExercises />}
                    />
                    <Route
                        path={URL.exercises_storage}
                        element={<ExercisesStorage />}
                    />
                    {/* изменить страницу */}
                    <Route path={URL.error} element={<ListWorkouts />} />
                </Routes>
            ) : (
                <Routes>
                    <Route path={URL.base} element={<Login />} />
                    <Route path={URL.registration} element={<Registration />} />
                    {/* изменить страницу */}
                    <Route path={URL.error} element={<Login />} />
                </Routes>
            )}
        </Suspense>
    );
};
export default Routing;
