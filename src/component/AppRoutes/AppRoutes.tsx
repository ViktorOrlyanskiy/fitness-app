import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from 'hooks';

import Login from 'pages/Login';
import Registration from 'pages/Registration';
import ListWorkouts from 'pages/ListWorkouts';
import CurrentWorkout from 'pages/CurrentWorkout';
import ListExercises from 'pages/ListExercises';
import FormAddExercise from 'pages/FormAdding/FormAddExercise/FormAddExercise';
import FormAddSet from 'pages/FormAdding/FormAddSet/FormAddSet';

const AppRoutes = () => {
    const user = useAppSelector((state) => state.user);
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
export default AppRoutes;
