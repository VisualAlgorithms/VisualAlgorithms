import '../../css/LinkedList.css';
import React from 'react';
import Navbar from '../Navbar';
import { Router, Route, Switch } from 'react-router';
import { LinkedList } from '../../../datastructures/linkedlist/linkedlist';
import P5Wrapper from 'react-p5-wrapper'

export default class LinkedListComponent extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.createLL = this.createLL.bind(this);
    }

    createLL() {
        let ll = new LinkedList();
        console.log(ll);
    }

    render() {
        return (<div>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5">
                        {/* <!-- Start accordian --> */}
                        <div id="accordion">
                            <div className="card">
                                <div className="card-header pointer-cursor" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                                    aria-controls="collapseOne">
                                    <h6 className="mb-0">
                                        <span className="line-height-accordian arrow-cursor">
                                            add()
                                </span>
                                        <i onClick={this.createLL} className="fa fa-play pull-right line-height-accordian"></i>
                                        <i className="fa fa-bars pull-right line-height-accordian pointer-cursor"></i>
                                    </h6>
                                </div>
                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="card-body">
                                        <pre>
                                            <code>add(obj) {'{'}<br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;const d = this._dummy;<br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;const n = new Node(obj, d, d.prev);<br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;d.prev.next = n;<br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;d.prev = n;<br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;++this._size;<br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;return true;<br />
                                                {'}'}
                                            </code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <h6 className="mb-0">
                                        <span className="line-height-accordian arrow-cursor">
                                            remove()
                                </span>
                                        <i className="fa fa-play pull-right line-height-accordian pointer-cursor"></i>
                                        <i className="fa fa-bars pull-right line-height-accordian pointer-cursor" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true"
                                            aria-controls="collapseOne"></i>
                                    </h6>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                    <div className="card-body">
                                        <pre>
                                            <code>add(obj) {'{'}<br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;const d = this._dummy;<br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;const n = new Node(obj, d, d.prev);<br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;d.prev.next = n;<br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;d.prev = n;<br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;++this._size;<br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;return true;<br />
                                                {'}'}
                                            </code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <h6 className="mb-0">
                                        <span className="line-height-accordian arrow-cursor">
                                            get()
                                </span>
                                        <i className="fa fa-play pull-right line-height-accordian pointer-cursor"></i>
                                        <i className="fa fa-bars pull-right line-height-accordian pointer-cursor" data-toggle="collapse" data-target="#collapseThree"
                                            aria-expanded="true" aria-controls="collapseOne"></i>
                                    </h6>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                    <div className="card-body">
                                        <pre>
                                            <code>add(obj) {'{'}<br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;const d = this._dummy;<br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;const n = new Node(obj, d, d.prev);<br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;d.prev.next = n;<br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;d.prev = n;<br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;++this._size;<br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;return true;<br />
                                                {'}'}
                                            </code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End accordian --> */}
                    </div>
                    {/* <!-- // col --> */}
                    <div className="col-lg-7" id="p5-div">
                        <P5Wrapper sketch={sketch} />
                    </div>
                </div>
                {/* <!-- // row --> */}
            </div>
            {/* <!-- // container --> */}
        </div>
        );
    }
}

function sketch(p) {
    const canvasDiv = document.getElementById('p5-div');
    let time = 0;

    p.setup = () => {
        const canvas = p.createCanvas(canvasWidth(), canvasHeight());
        canvas.parent(canvasDiv);
        p.background(0);
    }

    p.draw = () => {
        p.background(0);
        const halfHeight = p.height / 2;
        const halfWidth = p.width / 2;
        const circleDiameter = halfHeight / 5;
        const circleRadius = circleDiameter / 2;

        p.translate(halfWidth, halfHeight);

        p.ellipse(
            (halfWidth - circleRadius) * Math.cos(time),
            (halfHeight - circleRadius) * Math.sin(time),
            circleDiameter,
            circleDiameter
        );

        time += 0.01;
        time %= 2 * Math.PI;
    }

    p.windowResized = () => {
        p.resizeCanvas(canvasWidth(), canvasHeight());
    }

    const canvasWidth = () => canvasDiv.offsetWidth - 30;
    const canvasHeight = () => canvasDiv.offsetHeight - 7;
}
