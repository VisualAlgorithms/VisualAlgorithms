import '../../css/caesarcipher.css';
import React from 'react';
import Navbar from '../Navbar';
import { Router, Route, Switch } from 'react-router';
//import { LinkedList } from '../../../datastructures/linkedlist/linkedlist';
//import P5Wrapper from 'react-p5-wrapper'

export default class CaesarCipherComponent extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (<div>
            <Navbar />
            <div className="container">
                <h1 className="display-3">Hello World!</h1>
                <p>This website is dedicated to those who ask questions and seek solutions to some of the worlds most difficult problems.
            We hope you enjoy the journey as much as we do. ~Z</p>
                <a className="btn btn-primary btn-lg" href="./html/about.html" role="button">Learn more »</a>
            </div>
        </div>
        );
    }
}
