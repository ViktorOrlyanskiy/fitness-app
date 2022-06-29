import { Routes, Route } from "react-router-dom";
import CurrentWorkout from "pages/CurrentWorkout";
import ListWorkouts from "pages/ListWorkouts";
import ListExercises from "pages/ListExercises";
import FormAddExercise from "pages/FormAdding/FormAddExercise/FormAddExercise";
import FormAddSet from "pages/FormAdding/FormAddSet/FormAddSet";


const AppRoutes = ({ }) => {

    return (
        <Routes>
            <Route path={'/'} element={<ListWorkouts />} />
            <Route path={'/current-workout'} element={<CurrentWorkout />} />
            <Route path={'/current-workout/add-set'} element={<FormAddSet />} />
            <Route path={'/list-workouts'} element={<ListWorkouts />} />
            <Route path={'/list-exercises'} element={<ListExercises />} />
            <Route path={'/list-exercises/add-exercise'} element={<FormAddExercise />} />
        </Routes>
    );
};
export default AppRoutes;