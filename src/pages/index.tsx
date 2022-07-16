import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppSelectors } from 'hooks/useRedux';
import { URL } from 'shared/constants/URL';

const Login = lazy(() => import('./LoginPage'));
const Registration = lazy(() => import('./RegistrationPage'));
const ListWorkouts = lazy(() => import('./ListWorkoutsPage'));
const CurrentWorkout = lazy(() => import('./CurrentWorkoutPage'));
const ListExercises = lazy(() => import('./ListExercisesPage'));
const FormAddExercise = lazy(() => import('./FormAddingPage/FormAddExercise'));
const FormAddSet = lazy(() => import('./FormAddingPage/FormAddSet'));

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
                    <Route path={URL.add_set} element={<FormAddSet />} />
                    <Route
                        path={URL.list_workouts}
                        element={<ListWorkouts />}
                    />
                    <Route
                        path={URL.list_exercises}
                        element={<ListExercises />}
                    />
                    <Route
                        path={URL.add_exercise}
                        element={<FormAddExercise />}
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
