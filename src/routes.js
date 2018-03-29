import App from './components/App';
import LinkedListComponent from './components/datastructures/LinkedListComponent';
import CaeserCipherComponent from './components/algorithms/CaeserCipherComponent';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/linkedlist' component={LinkedListComponent} />
        <Route exact path='/caesercipher' component={CaeserCipherComponent} />
        {/* <Route exact path='/test' component={LinkedListComponent} /> */}
    </Switch>
);

export default Routes;
