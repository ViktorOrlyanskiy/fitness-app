import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppSelectors } from 'hooks/useRedux';

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
        </Suspense>
    );
};
export default Routing;
