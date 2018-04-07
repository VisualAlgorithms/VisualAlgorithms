import Accordian from './Accordian';
import P5Wrapper from 'react-p5-wrapper';
import React from 'react';


export default class PresentationPage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5">
                        <Accordian fileName={this.props.fileName} ext={this.props.ext} />
                    </div>
                    <div className="col-lg-7" id="p5-div">
                        <P5Wrapper sketch={this.props.sketch} />
                    </div>
                </div>
            </div>
        );
    }
}