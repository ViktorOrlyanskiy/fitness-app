import './styles/App.scss';
import React from 'react';
import { CurrentWorkout } from './pages/CurrentWorkout/index.js';

function App() {

  return (
    <div className='container'>

      {/* <div className="header__fixed"></div> */}

      <main className="main__body">
        <CurrentWorkout />
      </main>

    </div>
  )
}
export default App;
