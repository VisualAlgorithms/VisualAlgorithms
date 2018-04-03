import AccordianCard from './AccordianCard'
import React from 'react';

export default class Accordian extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id="accordion" >
                <AccordianCard methodSig='add(obj)' collapseId='one' show="show" />
                <AccordianCard methodSig='get()' collapseId='two' show="" />
                <AccordianCard methodSig='remove(obj)' collapseId='three' show="" />
            </div>
        );
    }
}