import React from 'react';
import { htmlify } from '../utils';

export default class AccordianCard extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="card">
                <div className="card-header pointer-cursor" id="headingOne" data-toggle="collapse" data-target={`#${this.props.collapseId}`} aria-expanded="true"
                    aria-controls="collapseOne">
                    <h6 className="mb-0">
                        <span className="line-height-accordian arrow-cursor">
                            {this.props.methodSig}
                        </span>
                        <i onClick={this.createLL} className="fa fa-play pull-right line-height-accordian"></i>
                        <i className="fa fa-bars pull-right line-height-accordian pointer-cursor"></i>
                    </h6>
                </div>
                <div id={this.props.collapseId} className={"collapse " + this.props.show} aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                        {htmlify(this.props.methodString)}
                    </div>
                </div>
            </div>
        );
    }
}