import React, { Component } from 'react';
import ConsonantChart from './ConsonantChart';
import VowelChart from './VowelChart';
import './ipa-chart.scss';

export default class IPAChart extends Component {
    render() {
        return (
            <div className='ipa-chart'>
                <h1>Interactive IPA Chart</h1>
                <h2>{this.props.title}</h2>
                <h4>Legend:</h4>
                <div class='legend'>
                    <div id='legend-multiple'/> = multiple phonemes with similar articulation
                </div>
                <h4>Pulmonic consonants</h4>
                For each pair, the symbol on the right represents the voiced counterpart.
                <ConsonantChart default={this.props.default} language={this.props.language}/>
                Shaded areas represent articulations thought to be impossible to produce.
                <br />
                <h4>Vowels</h4>
                <VowelChart default={this.props.default} language={this.props.language}/>
                {/* <p>The sounds on this page are from the <a href="https://en.wikipedia.org/wiki/IPA_pulmonic_consonant_chart_with_audio">Wikipedia IPA pulmonic chart</a> and are licensed under <a href="https://creativecommons.org/licenses/by-sa/3.0/deed.en">CC BY-SA 3.0</a>.</p> */}
            </div>
        );
    }
};