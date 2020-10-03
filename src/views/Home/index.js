import React, { Component } from 'react';
import ConsonantChart from '../../components/charts/consonants';

export default class Home extends Component {
  render() {
    return (
      <>
        <h1>Interactive IPA Chart</h1>
        <h4>Pulmonic consonants</h4>
        For each pair, the symbol on the right represents the voiced counterpart.
        <ConsonantChart />
        Shaded areas represent articulations thought to be impossible to produce.
        <br/>
        The sounds on this page are from the <a href="https://en.wikipedia.org/wiki/IPA_pulmonic_consonant_chart_with_audio">Wikipedia IPA pulmonic chart</a> and are licensed under <a href="https://creativecommons.org/licenses/by-sa/3.0/deed.en">CC BY-SA 3.0</a>.
      </>
    );
  }
};