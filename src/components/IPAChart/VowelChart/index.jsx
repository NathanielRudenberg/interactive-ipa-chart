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

    const CHART_WIDTH = 553;
    const CHART_HEIGHT = 418;
    const CHART_SECTION_HEIGHT = CHART_HEIGHT / 3;

    // Define the fixed bounds for the Z-score grid
    const scaleFactor = 1.5;
    const NORM_MIN_Z = -scaleFactor;
    const NORM_MAX_Z = scaleFactor;
    const NORM_RANGE = NORM_MAX_Z - NORM_MIN_Z;

    const getNormalizedCoordinates = (f1_norm, f2_norm) => {      
        const y_ratio_unflipped = (f1_norm - NORM_MIN_Z) / NORM_RANGE;
        const y_pos = CHART_HEIGHT * y_ratio_unflipped;
        
        const x_ratio_unflipped = (f2_norm - NORM_MIN_Z) / NORM_RANGE;
        const x_ratio = 1 - x_ratio_unflipped; 
        const x_pos = CHART_WIDTH * x_ratio;
    
        return {
            // Clamping ensures the Z-scores stay within the visible boundaries
            top: Math.max(0, Math.min(CHART_HEIGHT, y_pos)) - 20.5,
            left: Math.max(0, Math.min(CHART_WIDTH, x_pos))
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
                    let vowelElement;
                    if (languageName === 'default' || formantValues[vowelName] === undefined) {
                        vowelElement = (
                            <Vowel language={languageName} key={vowelName} name={vowelName} className={vowelName + " vowel"}>
                                {phonemes.length > 0 ? phonemes[0].symbol : vowelSymbols[vowelName]}
                            </Vowel>
                        )
                    } else {
                        vowelElement = (
                            <Vowel language={languageName} key={vowelName} name={vowelName} className={"vowel"} style={style} >
                                {phonemes.length > 0 ? phonemes[0].symbol : vowelSymbols[vowelName]}
                            </Vowel>
                        )
                    }
                    displayedVowels.push(vowelElement);
                }
            })
        })
    })

    const STROKE_WIDTH = 4;
    const INSET = STROKE_WIDTH / 2;
    const BOTTOM_LEFT_X = 155.5;

    const VOWEL_SECTION_Y1 = CHART_SECTION_HEIGHT;
    const VOWEL_SECTION_Y2 = CHART_SECTION_HEIGHT * 2;

    // const SLOPE = 2.3866;
    const SLOPE = (CHART_HEIGHT) / (BOTTOM_LEFT_X);
    
    const SECTION_X1 = (VOWEL_SECTION_Y1 / SLOPE);
    const SECTION_X2 = (VOWEL_SECTION_Y2 / SLOPE);

    // Calculate the start and end X-coordinates for the Central Axis
    const CENTER_X_TOP = (6 + (CHART_WIDTH)) / 2;
    const CENTER_X_BOTTOM = ((BOTTOM_LEFT_X + 8) + CHART_WIDTH) / 2;

    const boatPoints = [
        `${1},${0}`,
        `${CHART_WIDTH},${0}`,
        `${CHART_WIDTH},${CHART_HEIGHT}`,
        `${BOTTOM_LEFT_X},${CHART_HEIGHT}`
    ].join(" ");

    return (
        <div className="vowel-section">
            <div className="vowel-boat-container">
                <svg className="vowel-boat-svg" 
                     width={CHART_WIDTH} 
                     height={CHART_HEIGHT} 
                     viewBox={`${-INSET} ${-INSET} ${CHART_WIDTH + STROKE_WIDTH} ${CHART_HEIGHT + STROKE_WIDTH}`}
                     preserveAspectRatio="none">
                    <polygon points={boatPoints} fill="none" stroke="black" strokeWidth="4" />
                    {/* Close-Mid Boundary */}
                    <line 
                        x1={SECTION_X1} 
                        y1={VOWEL_SECTION_Y1} 
                        x2={CHART_WIDTH} 
                        y2={VOWEL_SECTION_Y1} 
                        stroke="black" 
                        strokeWidth={STROKE_WIDTH} 
                    />
                    {/* Line 2: Mid/Open Boundary */}
                    <line 
                        x1={SECTION_X2} 
                        y1={VOWEL_SECTION_Y2} 
                        x2={CHART_WIDTH} 
                        y2={VOWEL_SECTION_Y2} 
                        stroke="black" 
                        strokeWidth={STROKE_WIDTH} 
                    />

                    {/* Optional: Central Axis (F2 Center) Divider */}
                    <line 
                        x1={CENTER_X_TOP}
                        y1={0}
                        x2={CENTER_X_BOTTOM}
                        y2={CHART_HEIGHT}
                        stroke="black"
                        strokeWidth="4"
                    />
                </svg>

                {displayedVowels}
            </div>
        </div>
    )
}
