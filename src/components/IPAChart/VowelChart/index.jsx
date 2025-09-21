import React from 'react';
import Vowel from './Vowel';
import {specs, symbols} from '../../../services/phonemeSpecs';
import vowelChartPositions from '../../../services/vowelChartLayout';
import './vowels.scss';

export default function VowelChart(props) {
    let languageName = props.language ? props.language : 'default';
    let vowels = specs[languageName].phonemes.filter(phone => phone.vowel);
    let vowelSymbols = symbols.vowels;

    let filterPhonemes = (filters) => {
        const matchingPhonemes = vowels.filter(phone =>
            Object.entries(filters).every(([key, value]) => phone[key] === value)
        );

        const defaultSymbol = matchingPhonemes.length > 0 ? matchingPhonemes[0].symbol : '?';

        return {phonemes: matchingPhonemes, defaultSymbol}
    };

    const displayedVowels = [];

    vowelChartPositions.height.forEach(height => {
        vowelChartPositions.backness.forEach(backness => {
            vowelChartPositions.roundedness.forEach(roundedness => {
                const vowelName = `${height.label}_${backness.label}_${roundedness.label}_vowel`;
                const {phonemes} = filterPhonemes({[height.key]: true, [backness.key]: true, [roundedness.key]: true});
                if (phonemes.length > 0) {
                    displayedVowels.push(
                        <Vowel language={languageName} key={vowelName} name={vowelName} className={vowelName + " vowel"}>
                            {phonemes.length > 0 ? phonemes[0].symbol : vowelSymbols[vowelName]}
                        </Vowel>
                    );
                }
            })
        })
    })

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

                {displayedVowels}
            </div>
        </div>
    )
}