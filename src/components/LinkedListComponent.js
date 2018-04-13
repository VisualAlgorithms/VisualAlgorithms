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
                <PresentationPage fileName='linkedlist' ext='js' sketch={sketch} />
            </div>
        );
    }
}

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
        p.background(204,226,225);
       
        p.rectMode(p.CENTER);
        drawer = new NodeDrawer();
        for (let i = 0; i < 2; ++i)
            drawer.add(new NodeGraphics(i));
    }

    function drawNode() {
        drawer.add(new NodeGraphics(Math.floor(p.random(100))));
    }

    p.draw = () =>{
        p.translate(p.width / 2, p.height / 2);
        p.background(220);
        drawer.drawAllNodes();
        p.drawBus();
        drawer.drawAllDs();
    }

    p.drawBus= () =>{
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



    // let time = 0;

    // p.setup = () => {
    //     const canvas = p.createCanvas(canvasWidth(), canvasHeight());
    //     canvas.parent(canvasDiv);
    //     p.background(204,226,225);
    // }

    // p.draw = () => {
    //     p.background(204,226,225);
    //     var y =0;
    //     var d =50;
    //     const halfHeight = p.height / 2;
    //     const halfWidth = p.width / 2;
    //     const circleDiameter = halfHeight / 5;
    //     const circleRadius = circleDiameter / 2;

    //     // for (var i  =20; i<400; i+=60)
    //     // {
    //     //     p.line (i,40,i+60,80);
    //     // }
    //     for (var i  =20; i<400; i+=60)
    //     {
    //         p.line (i,40,60,i+60,80);
    //     }

    //     p.translate(halfWidth, halfHeight);
    //     p.strokeWeight(3);
    //     p.ellipse(
    //         (halfWidth - circleRadius) * Math.cos(2*time),
    //         (halfHeight - circleRadius) * Math.sin(2*time),
    //         circleDiameter,
    //         circleDiameter
    //     );
    //     p.ellipse(100,y,d,d);
    //     p.ellipse(-100,y,d,d);
    //     p.ellipse(0,y,d,d);

    //     time += 0.01;
    //     time %= 2 * Math.PI;
    // }