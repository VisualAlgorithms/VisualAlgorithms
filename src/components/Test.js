import React from 'react';
import ReactDOM from 'react-dom';
import tests from '../../test/linkedlist.test';
export default class Test extends React.Component {
    constructor() {
        super();
        this.test = this.test.bind(this);
    }

    test() {
        mocha.checkLeaks();
        mocha.run();
    }

    render() {
        return (
            <div>
                <button onClick={this.test}>Run Tests</button>
                <div id="mocha" ></div >
            </div>
        );
    }
}
