import React, { Component } from 'react';
import LanguageSelector from '../../components/LanguageSelector';
import IPAChart from '../../components/IPAChart';

export default class Home extends Component {
  constructor(props) {
    super();

    this.state = {
      languageSelected: false,
      selectedLanguage: undefined,
    }
  }

  componentDidMount() {
    let currentPath = window.location.pathname;
    if ((/^\/languages\/.+/).test(currentPath)) this.setState({languageSelected: true});
  }

  updateSelectedLanguage = (language) => {
    this.setState({selectedLanguage: language})
  }

  clearSelectedLanguage = () => {
    this.setState({
      languageSelected: false,
      selectedLanguage: undefined,
    })
  }
  
  render() {
    let { languageSelected } = this.state;
    let langSelectContainerClass = 'language-selector-container language-selector-container--retracted';

    return (
      <div className='languages-container'>
      <div className={langSelectContainerClass}>
        <LanguageSelector clear={this.clearSelectedLanguage} updateLanguage={this.updateSelectedLanguage}/>
      </div>
      <div className={'chart-container'} >
        <IPAChart default={false} language={this.state.selectedLanguage}/>
      </div>
    </div>
    );
  }
};