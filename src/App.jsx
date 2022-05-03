import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './components/AppRoutes/AppRoutes';
import { Navbar } from './components/Navbar/Navbar';
import './styles/App.scss';



function App() {

  return (
    <BrowserRouter>
      <div className='container'>
        {/* <header className="header__fixed"><Navbar /></header> */}
        <main className="main__body"><AppRoutes /></main>
      </div>
    </BrowserRouter >
  )
}
export default App;
