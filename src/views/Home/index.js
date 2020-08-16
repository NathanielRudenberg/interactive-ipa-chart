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
        Shaded areas represent sounds thought to be impossible to produce.
      </>
    );
  }
};