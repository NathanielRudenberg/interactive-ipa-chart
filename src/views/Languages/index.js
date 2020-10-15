import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import LanguageSelector from '../../components/LanguageSelector';
import IPAChart from '../../components/IPAChart';
import './languages.scss';

export default class Languages extends Component {
  constructor(props) {
    super();

    this.state = {
      languageSelected: false,
    }
  }

  retractSelector = () => {
    this.setState({languageSelected: true});
  }

  componentDidMount() {
    let currentPath = window.location.pathname;
    if ((/^\/languages\/.+/).test(currentPath)) this.setState({languageSelected: true});
  }

  render() {
    let { languageSelected } = this.state;
    let langSelectContainerClass = 'language-selector-container';
    if (languageSelected) langSelectContainerClass += " language-selector-container--retracted";

    return (
      <div class='languages-container'>
        <div className={langSelectContainerClass}>
          <LanguageSelector retract={this.retractSelector}/>
        </div>
        <div class={'chart-container'} >
          <IPAChart/>
        </div>
      </div>
    );
  }
};