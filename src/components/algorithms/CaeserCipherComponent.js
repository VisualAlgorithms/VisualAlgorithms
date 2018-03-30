import '../../css/caesarcipher.css';
import React from 'react';
import Navbar from '../Navbar';
import { Router, Route, Switch } from 'react-router';
import P5Wrapper from 'react-p5-wrapper';
import htmlify from '../../utils';
import axios from 'axios';

export default class CaesarCipherComponent extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.doFetch = this.doFetch.bind(this);
    }

    doFetch() {
        axios.get('https://us-central1-visualalgorithms-326e6.cloudfunctions.net/app/code')
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }

    render() {
        return (<div>
            <Navbar />
            <div className="container">
                <h1 className="display-3">Hello everybody!</h1>
                <p>This website is dedicated to those who ask questions and seek solutions to some of the worlds most difficult problems.
            We hope you enjoy the journey as much as we do. ~Z</p>
                <a className="btn btn-primary btn-lg" href="./html/about.html" role="button">Learn more »</a>
                <p onClick={this.doFetch}>click me</p>
            </div>
        </div>
        );
    }
}
