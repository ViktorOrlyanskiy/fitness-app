import Home from "../pages/Home/Home";
import { CurrentWorkout } from "../pages/CurrentWorkout";
import { ListWorkouts } from "../pages/ListWorkouts";
import FormAddSet from "../pages/CurrentWorkout/pages/FormAddSet";
import { ListExercises } from "../pages/ListExercises";


export const privateRoutes = [
    { path: '/', element: <Home />, exact: true },
    { path: '/current-workout', element: <CurrentWorkout />, exact: true },
    { path: '/current-workout/add-set', element: <FormAddSet />, exact: true },
    { path: '/list-exercises', element: <ListExercises />, exact: true },
    { path: '/list-workouts', element: <ListWorkouts />, exact: true },
    // { path: '/*', element: <Error />, exact: true },

];

export const publicRoutes = [
    { path: '/', element: <Home />, exact: true },
];