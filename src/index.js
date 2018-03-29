import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Routes from './routes';

const title = 'VisualAlgorithms';

ReactDOM.render(
    <HashRouter>
        <Routes />
    </HashRouter>,
    document.getElementById('root')
);

module.hot.accept();
