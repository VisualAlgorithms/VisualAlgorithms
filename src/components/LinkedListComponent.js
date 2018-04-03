import '../css/LinkedList.css';
import React from 'react';
import Navbar from './Navbar';
import { Router, Route, Switch } from 'react-router';
import { LinkedList } from '../../lib/datastructures/linkedlist/linkedlist';
import PresentationPage from './PresentationPage';

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
        return (
            <div>
                <Navbar />
                <PresentationPage sketch={sketch} />
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
