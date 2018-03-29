import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <Link className="navbar-brand" to='/'>VisualAlgorithms</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar-fixed-top" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/'>Home</Link>
                            <span className="sr-only">(current)</span>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/linkedlist'>Linked List</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/linkedlist'>Caesar Cipher</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/linkedlist'>Test</Link>
                        </li>
                    </ul>
                </div>
            </nav >
        );
    }
}