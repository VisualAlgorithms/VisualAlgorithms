import '../css/caesarcipher.css';
import React from 'react';
import Navbar from './Navbar';
import CodeCard from './CodeCard';
import { Router, Route, Switch } from 'react-router';
import P5Wrapper from 'react-p5-wrapper';
import htmlify from '../utils';
import axios from 'axios';

export default class CaesarCipherComponent extends React.Component {
    constructor() {
        super();
        this.state = { str: '' };
        this.doFetch = this.doFetch.bind(this);
    }

    doFetch() {
        axios.get('/code')
            .then(response => this.setState({ str: response.data }))
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
                    <a className="btn btn-lg" href="https://en.wikipedia.org/wiki/Caesar_cipher" role="button">Learn more »</a>
                </p>
                <button type="button" onClick={this.doFetch}>Get Code</button>
                <div>{htmlify(this.state.str)}</div>
            </div>
        </div>
        );
    }
}
