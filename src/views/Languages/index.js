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

  toggleSpacing = () => {
    this.setState({languageSelected: !this.state.languageSelected});
  }

  componentDidMount() {
    let currentPath = window.location.pathname;
    if ((/^\/languages\/.+/).test(currentPath)) this.setState({languageSelected: true});
  }

  render() {
    let { languageSelected } = this.state;
    let langSelectContainerClass = 'language-selector-container';
    if (languageSelected) langSelectContainerClass += " language-selector-container--retracted";

    let chartDisplay = languageSelected ? <IPAChart/> : <></>;

    return (
      <div class='languages-container'>
        <div className={langSelectContainerClass}>
          <LanguageSelector />

          <Button variant='outlined' onClick={this.toggleSpacing}>
            Toggle Spacing
          </Button>
        </div>
        <div class={'chart-container'} >
          {chartDisplay}
        </div>
      </div>
    );
  }
};