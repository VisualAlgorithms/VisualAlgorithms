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
        this.methods = [
            {
                id: 'one',
                header: 'add(obj)',
                arguments: ['obj']
            },
            {
                id: 'two',
                header: 'get(index)',
                arguments: ['index']
            },
            {
                id: 'three',
                header: 'remove(obj)',
                arguments: ['obj']
            },
            {
                id: 'four',
                header: 'clear()',
                arguments: []
            },
            {
                id: 'five',
                header: 'set(index, object)',
                arguments: ['index', 'object']
            },
            {
                id: 'six',
                header: 'indexOf(object)',
                arguments: ['object']
            }
        ]
    }

    createLL() {
        let ll = new LinkedList();
    }

    render() {
        return (
            <div>
                <Navbar />
                <PresentationPage fileName='linkedlist' ext='js' sketch={sketch} methods={this.methods} />
            </div>
        );
    }
}

//Testing Github Sync with slack! Hello MATT!!

function sketch(p) {

    const canvasWidth = () => canvasDiv.offsetWidth - 30;
    const canvasHeight = () => canvasDiv.offsetHeight - 7;
    const canvasDiv = document.getElementById('p5-div');

    let drawer;
    const SCALE = 1;

    p.windowResized = () => {
        p.resizeCanvas(canvasWidth(), canvasHeight());
    }

    p.setup = () => {
        let canvas;
        canvas = p.createCanvas(canvasWidth(), canvasHeight());
        canvas.mousePressed(drawNode);
        canvas.parent(canvasDiv);
        p.background(204, 226, 225);

        p.rectMode(p.CENTER);
        drawer = new NodeDrawer();
        for (let i = 0; i < 2; ++i)
            drawer.add(new NodeGraphics(i));
    }

    function drawNode() {
        drawer.add(new NodeGraphics(Math.floor(p.random(100))));
    }

    p.draw = () => {
        p.translate(p.width / 2, p.height / 2);
        p.background(220);
        drawer.drawAllNodes();
        p.drawBus();
        drawer.drawAllDs();
    }

    p.drawBus = () => {
        // bus
        p.noFill();
        p.ellipse(0, 0, p.width * 0.63, p.height * 0.63);
        p.ellipse(0, 0, p.width * 0.68, p.height * 0.68);
        p.fill(255);
    }

    class NodeGraphics {
        constructor(data) {
            this.width = p.width * 0.1;
            this.angle = Math.PI / 2;
            this.data = data;
        }

        drawNode() {
            // node body
            let x = p.width * 0.35 * Math.cos(this.angle);
            let y = p.height * 0.35 * -Math.sin(this.angle);
            let w = this.width;
            p.ellipse(x, y, w * 1.6, w * 1.6);
        }

        drawDs() {
            // node ds	
            let x = p.width * 0.35 * Math.cos(this.angle);
            let y = p.height * 0.35 * -Math.sin(this.angle);
            let w = this.width;
            p.push();
            p.translate(x, y);
            p.rotate(Math.PI / 2 - this.angle);
            p.rect(0, 0, w, w);
            p.line(-w / 2, 0, w / 2, 0);
            p.line(0, 0, 0, w / 2);
            p.fill(0);
            p.textAlign(p.CENTER);
            p.text(this.data, 0, -4);
            p.pop();

        }
    }

    class NodeDrawer {
        constructor() {
            this.nodes = [];
        }

        add(node) {
            // add new node
            this.nodes.push(node);

            // recalculate all positions and angles
            for (let i = 0; i < this.nodes.length; ++i) {
                // update angles
                this.updateAngle(i);
            }
        }

        drawAllNodes() {
            for (let n of this.nodes)
                n.drawNode();
        }

        drawAllDs() {
            for (let n of this.nodes)
                n.drawDs();
        }

        updateAngle(index) {
            this.nodes[index].angle = 2 * Math.PI / this.nodes.length * (index) + Math.PI / 2;
        }
    }
}