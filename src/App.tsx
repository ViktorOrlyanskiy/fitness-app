import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ListWorkouts from 'pages/ListWorkouts';
import CurrentWorkout from 'pages/CurrentWorkout';
import './styles/App.scss'





const App: FC = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        {/* <header className="header__fixed"><Stopwatch /></header> */}
        {/* <main className="main__body"><AppRoutes /></main> */}
        {/* <ListWorkouts /> */}
        <CurrentWorkout />
      </div>
    </BrowserRouter >
  );
}

export default App;
