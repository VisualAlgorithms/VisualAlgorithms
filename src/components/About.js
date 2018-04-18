
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';

export default class About extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container-fluid">
                    <h1 className="display-3">VisualAlgorithms</h1>
                    <p>
                        Lacking Creativity...
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae justo odio. Fusce eu semper ligula, in placerat arcu.
                        Morbi hendrerit tellus at arcu imperdiet, in dignissim odio consequat.
                        Cras pellentesque feugiat turpis eget sagittis.
                        Mauris fermentum, est non dignissim commodo, quam elit lacinia neque, at imperdiet ex quam nec nisi.
                        Aliquam ac consequat elit. Proin tempor egestas ligula, vel luctus urna blandit maximus.
                        Maecenas cursus, ex a convallis placerat, arcu nibh tincidunt quam, nec ullamcorper tellus massa ac ante.
                        Maecenas pretium arcu non interdum pharetra. Pellentesque venenatis nulla sit amet pellentesque auctor.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum nec nisl quis mattis.
                        Suspendisse convallis ex nec felis molestie, in vehicula dui pulvinar.
                        Suspendisse convallis maximus magna, a luctus lectus hendrerit a.
                        Ut sed nibh quis neque molestie commodo non quis nisl. Aliquam ac mollis ipsum.
                    </p>
                    <br />

                    <a href="https://github.com/VisualAlgorithms/VisualAlgorithms" className="btn btn-dark" role="button"><i className="fa fa-github"></i></a>

                </div>
            </div>
        );
    }
}