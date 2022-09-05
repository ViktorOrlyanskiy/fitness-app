import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppSelectors } from 'hooks/useRedux';
import { URL } from 'shared/constants/URL';

import ListWorkouts from './ListWorkoutsPage';
import DetailsWorkout from './DetailsWorkoutPage';
import CurrentWorkout from './CurrentWorkoutPage';
import CurrentExercises from './CurrentExercisesPage';
import ExercisesStorage from './ExercisesStoragePage';
import ExerciseStatistics from './ExerciseStatisticsPage';
import FormAddSet from './FormsAddPage/FormAddSetPage';
import FormAddExercise from './FormsAddPage/FormAddExercisePage';

const Login = lazy(() => import('./LoginPage'));

const Routing = () => {
    const { user } = useAppSelectors();
    return (
        <Suspense fallback={<div>Loading...</div>}>
            {user.isAuth ? (
                <Routes>
                    <Route path={URL.base} element={<ListWorkouts />} />
                    <Route
                        path={URL.list_workouts}
                        element={<ListWorkouts />}
                    />
                    <Route
                        path={URL.details_workout}
                        element={<DetailsWorkout />}
                    />
                    <Route
                        path={URL.current_workout}
                        element={<CurrentWorkout />}
                    />
                    <Route path={URL.form_add_set} element={<FormAddSet />} />
                    <Route
                        path={URL.current_exercises}
                        element={<CurrentExercises />}
                    />
                    <Route
                        path={URL.exercise_statistics}
                        element={<ExerciseStatistics />}
                    />
                    <Route
                        path={URL.exercises_storage}
                        element={<ExercisesStorage />}
                    />

                    <Route
                        path={URL.form_add_exercise}
                        element={<FormAddExercise />}
                    />
                    {/* изменить страницу */}
                    <Route path={URL.error} element={<ListWorkouts />} />
                </Routes>
            ) : (
                <Routes>
                    <Route path={URL.base} element={<Login />} />
                    {/* изменить страницу */}
                    <Route path={URL.error} element={<Login />} />
                </Routes>
            )}
        </Suspense>
    );
};
export default Routing;
