import React, { useMemo } from 'react';
import Vowel from './Vowel';
import { specs, symbols } from '../../../services/phonemeSpecs';
import vowelChartPositions from '../../../services/vowelChartLayout';
import { useLanguage } from '../../LanguageProvider';
import './vowels.scss';

export default function VowelChart() {
    const { language, formantValues } = useLanguage();
    let languageName = language ? language : 'default';
    let vowels = specs[languageName].phonemes.filter(phone => phone.vowel);
    let vowelSymbols = symbols.vowels;

    const CHART_WIDTH = 590;
    const CHART_HEIGHT = 410.5;

    // Define the fixed bounds for the Z-score grid
    const scaleFactor = 1.5;
    const NORM_MIN_Z = -scaleFactor; // Corresponds to the most extreme lower/back/centralized vowels
    const NORM_MAX_Z = scaleFactor;  // Corresponds to the most extreme upper/front/peripheral vowels
    const NORM_RANGE = NORM_MAX_Z - NORM_MIN_Z;

    const getNormalizedCoordinates = (f1_norm, f2_norm) => {        
        // Calculate distance from the Min boundary
        const y_ratio_unflipped = (f1_norm - NORM_MIN_Z) / NORM_RANGE;
        
        // We want NORM_MIN_Z (-3.0) at the top, so we use the unflipped ratio:
        const y_pos = CHART_HEIGHT * y_ratio_unflipped;
        
        // Calculate ratio relative to Min boundary (gives 0 to 1)
        const x_ratio_unflipped = (f2_norm - NORM_MIN_Z) / NORM_RANGE;
        
        // Apply the visual inversion: 1 - ratio
        const x_ratio = 1 - x_ratio_unflipped; 
        const x_pos = CHART_WIDTH * x_ratio;
    
        return {
            // Clamping ensures the Z-scores stay within the visible boundaries
            top: Math.max(0, Math.min(CHART_HEIGHT, y_pos)) - 20.5,
            left: Math.max(0, Math.min(CHART_WIDTH, x_pos)) - 40
        };
    };

    let filterPhonemes = (filters) => {
        const matchingPhonemes = vowels.filter(phone =>
            Object.entries(filters).every(([key, value]) => phone[key] === value)
        );

        const defaultSymbol = matchingPhonemes.length > 0 ? matchingPhonemes[0].symbol : '?';

        return { phonemes: matchingPhonemes, defaultSymbol }
    };

    const displayedVowels = [];

    vowelChartPositions.height.forEach(height => {
        vowelChartPositions.backness.forEach(backness => {
            vowelChartPositions.roundedness.forEach(roundedness => {
                const vowelName = `${height.label}_${backness.label}_${roundedness.label}_vowel`;
                const { phonemes } = filterPhonemes({ [height.key]: true, [backness.key]: true, [roundedness.key]: true });

                const norm_f1 = formantValues[vowelName]?.norm_f1;
                const norm_f2 = formantValues[vowelName]?.norm_f2;

                const coords = getNormalizedCoordinates(norm_f1, norm_f2);
                let style = {}
                if (norm_f1 !== undefined) { 
                    style={ position: 'absolute', top: coords.top + 'px', left: coords.left + 'px' }
                }
                if (phonemes.length > 0) {
                    displayedVowels.push(
                        // <Vowel language={languageName} key={vowelName} name={vowelName} className={vowelName + " vowel"}>
                        <Vowel language={languageName} key={vowelName} name={vowelName} className={"vowel"} style={style} >
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
