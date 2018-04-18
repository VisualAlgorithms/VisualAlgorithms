import React from 'react';
import Navbar from './Navbar';
import { Router, Route, Switch } from 'react-router'
import { Link } from 'react-router-dom';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (<div>
            <Navbar />
            <div className="container-fluid">
                <h1 className="display-3">Hello World!</h1>
                <p>This website is dedicated to those who ask questions and seek solutions to some of the worlds most difficult problems.
            We hope you enjoy the journey as much as we do. ~Z</p>
                <Link className="btn btn-dark btn-outline-dark btn-lg" to='/about' role="button">About »</Link>
            </div>
        </div>
        );
    }
}