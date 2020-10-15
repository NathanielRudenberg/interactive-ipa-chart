import React, { Component } from 'react';
import ConsonantChart from './ConsonantChart';
import VowelChart from './VowelChart';

export default class Home extends Component {
    render() {
        return (
            <>
                <h1>Interactive IPA Chart</h1>
                <h2>{this.props.title}</h2>
                <h4>Pulmonic consonants</h4>
                For each pair, the symbol on the right represents the voiced counterpart.
                <ConsonantChart />
                Shaded areas represent articulations thought to be impossible to produce.
                <br />
                <h4>Vowels</h4>
                <VowelChart />
            </>
        );
    }
};