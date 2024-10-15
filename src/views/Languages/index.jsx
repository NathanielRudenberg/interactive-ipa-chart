import React, { Component } from 'react';
import Button from '@mui/material/Button';
import LanguageSelector from '../../components/LanguageSelector';
import IPAChart from '../../components/IPAChart';
import './languages.scss';

export default class Languages extends Component {
  constructor(props) {
    super();

    this.state = {
      languageSelected: false,
      selectedLanguage: undefined,
    }
  }

  retractSelector = () => {
    this.setState({languageSelected: true});
  }

  componentDidMount() {
    let currentPath = window.location.pathname;
    if ((/^\/languages\/.+/).test(currentPath)) this.setState({languageSelected: true});
  }

  updateSelectedLanguage = (language) => {
    this.setState({selectedLanguage: language})
  }

  render() {
    let { languageSelected } = this.state;
    let langSelectContainerClass = 'language-selector-container';
    if (languageSelected) langSelectContainerClass += " language-selector-container--retracted";

    return (
      <div class='languages-container'>
        <div className={langSelectContainerClass}>
          <LanguageSelector retract={this.retractSelector} updateLanguage={this.updateSelectedLanguage}/>
        </div>
        <div class={'chart-container'} >
          <IPAChart default={false} language={this.state.selectedLanguage}/>
        </div>
      </div>
    );
  }
};