import '../../css/caesarcipher.css';
import React from 'react';
import Navbar from '../Navbar';
import CodeCard from '../CodeCard';
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
                <h1 className="display-3">Welcome Fellow Romans!</h1>
                <p>
                    In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one
                    of the simplest and most widely known encryption techniques. It is a type of substitution cipher
                    in which each letter in the plaintext is replaced by a letter some fixed number of positions down
                    the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and
                    so on. The method is named after Julius Caesar, who used it in his private correspondence.
                <br />
                </p>
                <div className="float-right">~Wikipedia</div>
                <p>
                    <a className="btn btn-lg" href=".https://en.wikipedia.org/wiki/Caesar_cipher" role="button">Learn more »</a>
                </p>
                <CodeCard />
                <CodeCard />
                <CodeCard />
                <CodeCard />
                <p onClick={this.doFetch}>click me</p>
            </div>
        </div>
        );
    }
}
