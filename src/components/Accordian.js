import AccordianCard from './AccordianCard'
import axios from 'axios';
import React from 'react';
import { parseMethod } from '../utils';

export default class Accordian extends React.Component {
    constructor() {
        super();
        this.state = {
            codeString: ''
        };
        this.doFetch = this.doFetch.bind(this);
    }

    componentDidMount() {
        this.doFetch();
    }

    doFetch() {
        axios.get(`/code/${this.props.fileName}/${this.props.ext}`)
            .then(response => this.setState({ codeString: response.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div id="accordion" >

                {
                    this.props.methods.map((method) => {
                        return <AccordianCard
                            methodString={parseMethod(method.header, this.state.codeString)}
                            methodSig={method.header}
                            collapseId={method.id}
                            show={method.id == 'one' ? 'show' : ''}
                        />
                    })
                }

                {/* //     <AccordianCard
            //         methodString={parseMethod('add(obj)', this.state.codeString)}
            //         methodSig='add(obj)'
            //         collapseId='one'
            //         show="show" />
            //     <AccordianCard
            //         methodString={parseMethod('get(index)', this.state.codeString)}
            //         methodSig='get(index)'
            //         collapseId='two'
            //         show="" />
            //     <AccordianCard
            //         methodString={parseMethod('remove(obj)', this.state.codeString)}
            //         methodSig='remove(obj)'
            //         collapseId='three'
            //         show="" /> */}
            </div>
        );
    }
}

// TODO: add array of method signatures to accordion props