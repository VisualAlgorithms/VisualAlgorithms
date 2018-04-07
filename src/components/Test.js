import React from 'react';
import ReactDOM from 'react-dom';
import tests from '../../test/linkedlist.test';
import Navbar from "./Navbar";
import testCSS from "../css/Test.css"

export default class Test extends React.Component {
    constructor() {
        super();
        this.test = this.test.bind(this);

        const hideDiv = {
            display: 'none',
        };

    }

    test() {
        mocha.checkLeaks();
        mocha.run();
    }

    hide() {
        // this.style.display="none"
        // return style = { hideDiv };
        // return <div style={divStyle}>Hello World!</div>;
    }

    render() {
        return (
            <div>
                <Navbar />
                <div onClick={this.hide}>
                    <button className="btn btn-secondary " onClick={this.test}>Run Tests</button>
                </div>
                <div className="testCSS" id="mocha" ></div >
            </div>
        );
    }
}
