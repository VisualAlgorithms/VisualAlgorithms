import App from './components/App';
import CaeserCipherComponent from './components/algorithms/CaeserCipherComponent';
import { HashRouter, Route, Switch } from 'react-router-dom';
import LinkedListComponent from './components/datastructures/LinkedListComponent';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/linkedlist' component={LinkedListComponent} />
            <Route exact path='/caesercipher' component={CaeserCipherComponent} />
        </Switch>
    </HashRouter>,
    document.getElementById('root')
);
