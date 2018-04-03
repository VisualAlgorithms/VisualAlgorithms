import React from 'react';

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
        );
    }
}