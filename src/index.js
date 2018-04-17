import App from './components/App';
import CaesarCipherComponent from './components/CaesarCipherComponent';
import { HashRouter, Route, Switch } from 'react-router-dom';
import LinkedListComponent from './components/LinkedListComponent';
import React from 'react';
import ReactDOM from 'react-dom';
import Test from './components/Test';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/linkedlist' component={LinkedListComponent} />
            <Route exact path='/caesarcipher' component={CaesarCipherComponent} />
            <Route exact path='/test' component={Test} />
        </Switch>
    </HashRouter>,
    document.getElementById('root')
);
