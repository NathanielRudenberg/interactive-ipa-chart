import React from 'react';
import Vowel from './Vowel';
import {specs, symbols} from '../../../services/phonemeSpecs';
import './vowels.scss';

export default function VowelChart(props) {
    let languageName = props.language ? props.language : 'default';
    let vowelSpec = specs[languageName].vowels;
    let vowelSymbols = symbols.vowels;

    let vowels = vowelSpec.map(vowel => (
        vowel.include && <Vowel language={languageName} key={vowel.name} name={vowel.name} className={vowel.name + " vowel"}>{vowelSymbols[vowel.name]}</Vowel>
    ));

    return (
        <div className="vowel-section">
            <div className="vowel-boat-container">
                <div id="vowel-boat" className="vowel-boat-section" />
                <div id="top-left" className="vowel-boat-section" />
                <div id="top-right" className="vowel-boat-section" />
                <div id="mid-left" className="vowel-boat-section" />
                <div id="mid-right" className="vowel-boat-section" />
                <div id="bottom-left" className="vowel-boat-section" />
                <div id="bottom-right" className="vowel-boat-section" />

                {vowels}
            </div>
        </div>
    )
}