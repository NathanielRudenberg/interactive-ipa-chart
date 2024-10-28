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
        <div class="vowel-section">
            <div class="vowel-boat-container">
                <div id="vowel-boat" class="vowel-boat-section" />
                <div id="top-left" class="vowel-boat-section" />
                <div id="top-right" class="vowel-boat-section" />
                <div id="mid-left" class="vowel-boat-section" />
                <div id="mid-right" class="vowel-boat-section" />
                <div id="bottom-left" class="vowel-boat-section" />
                <div id="bottom-right" class="vowel-boat-section" />

                {vowels}
            </div>
        </div>
    )
}