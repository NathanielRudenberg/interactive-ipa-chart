import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import LanguageSelector from '../../components/LanguageSelector';
import './languages.scss';

export default class Languages extends Component {
  constructor(props) {
    super()

    this.state = {
      languageSelected: false,
    }
  }

  toggleSpacing = () => {
    this.setState({languageSelected: !this.state.languageSelected});
  }

  render() {
    let { languageSelected } = this.state;
    let chartContainerClass = languageSelected ? 'chart-container__expanded' : 'chart-container';

    return (
      <div class='languages-container'>
        <div class='language-selector-container'>
          <LanguageSelector />

          <Button variant='outlined' onClick={this.toggleSpacing}>
            Toggle Spacing
          </Button>
        </div>
        <div class={chartContainerClass} style={{
          flexGrow: languageSelected ? 14 : 0,
          transition: 'flex-grow 0.8s',
          transitionTimingFunction: 'ease',
        }}>

        </div>
      </div>
    );
  }
};