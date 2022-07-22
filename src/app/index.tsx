import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from 'pages';
import './styles/index.scss';

const App: FC = () => {
    return (
        <BrowserRouter>
            <div className="main-container">
                <main className="main__body">
                    <Routing />
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;
