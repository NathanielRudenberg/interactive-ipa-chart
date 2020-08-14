import React, { Component } from 'react';
import ConsonantChart from '../../components/charts/consonants';

export default class Home extends Component {
  render() {
    return (
      <>
        <h1>Interactive IPA Chart</h1>
        <ConsonantChart />
      </>
    );
  }
};