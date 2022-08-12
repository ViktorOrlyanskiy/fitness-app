import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from 'pages';
import './styles/index.scss';

const App: FC = () => {
    return (
        <BrowserRouter>
            <Routing />
        </BrowserRouter>
    );
};

export default App;
