import React, { Component } from 'react';
import IPAChart from '../../components/IPAChart';

export default class Home extends Component {
  render() {
    return (
      <>
        <IPAChart />
        The sounds on this page are from the <a href="https://en.wikipedia.org/wiki/IPA_pulmonic_consonant_chart_with_audio">Wikipedia IPA pulmonic chart</a> and are licensed under <a href="https://creativecommons.org/licenses/by-sa/3.0/deed.en">CC BY-SA 3.0</a>.
      </>
    );
  }
};