import React, { Component } from 'react';
import Typography from '@mui/material/Typography';
import ConsonantChart from './ConsonantChart';
import VowelChart from './VowelChart';
import './ipa-chart.scss';

export default class IPAChart extends Component {
    render() {
        return (
            <div className='ipa-chart'>
                <Typography variant="h1">Interactive IPA Chart</Typography>
                <h2>{this.props.title}</h2>
                <Typography variant="h4">Legend:</Typography>
                <div className='legend'>
                    <div id='legend-multiple' /> = multiple phonemes with similar articulation
                </div>
                <Typography variant="h4">Pulmonic consonants</Typography>
                For each pair, the symbol on the right represents the voiced counterpart.
                <ConsonantChart />
                Shaded areas represent articulations thought to be impossible to produce.
                <br />
                <Typography variant="h4">Vowels</Typography>
                <VowelChart />
                {/* <p>The sounds on this page are from the <a href="https://en.wikipedia.org/wiki/IPA_pulmonic_consonant_chart_with_audio">Wikipedia IPA pulmonic chart</a> and are licensed under <a href="https://creativecommons.org/licenses/by-sa/3.0/deed.en">CC BY-SA 3.0</a>.</p> */}
            </div>
        );
    }
};
