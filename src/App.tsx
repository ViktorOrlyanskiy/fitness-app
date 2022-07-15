import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from 'pages';

import './styles/App.scss';

const App: FC = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <header className="header__fixed"></header>
                <main className="main__body">
                    <Routing />
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;
