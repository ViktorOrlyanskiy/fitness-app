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
    console.log(user);
    return (
        <>
            {user.isAuth ? (
                <Routes>
                    <Route path={'/list-workouts'} element={<ListWorkouts />} />
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
                </Routes>
            ) : (
                <Routes>
                    <Route path={'/login'} element={<Login />} />
                    <Route path={'/registration'} element={<Registration />} />
                </Routes>
            )}
        </>
    );
};
export default AppRoutes;
