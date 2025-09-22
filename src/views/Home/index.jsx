import React, { useState } from 'react';
import LanguageSelector from '../../components/LanguageSelector';
import IPAChart from '../../components/IPAChart';
import { useLanguage } from '../../components/LanguageProvider';

 export default function Home() {

//   componentDidMount() {
//     let currentPath = window.location.pathname;
//     if ((/^\/languages\/.+/).test(currentPath)) this.setState({languageSelected: true});
//   }

    const { updateLanguage, clearSelectedLanguage } = useLanguage();
    let langSelectContainerClass = 'language-selector-container language-selector-container--retracted';

    return (
            <div className='languages-container'>
                <div className={langSelectContainerClass}>
                    <LanguageSelector />
                </div>
                <div className={'chart-container'} >
                    <IPAChart default={false} />
                </div>
            </div>
    );
};