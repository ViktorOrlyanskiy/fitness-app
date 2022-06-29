import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from 'component/AppRoutes/AppRoutes';
import './styles/App.scss'





const App: FC = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        {/* <header className="header__fixed"><Stopwatch /></header> */}
        <main className="main__body"><AppRoutes /></main>
      </div>
    </BrowserRouter >
  );
}

export default App;
