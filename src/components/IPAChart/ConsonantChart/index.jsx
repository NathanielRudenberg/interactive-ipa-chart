import React from 'react';
import Consonant from './Consonant';
import {specs, names} from '../../../services/phonemeSpecs';
import consonantChartLayouts from '../../../services/consonantChartLayouts';
import './consonants.scss';

export default function ConsonantChart(props) {
    let languageName = props.language ? props.language : 'default';

    const layout = consonantChartLayouts[languageName];
    let consonants = specs[languageName].phonemes.filter(phone => phone.consonant)

    let filterPhonemes = (baseFilters, row, layout) => {
        const additionalFilters = row.filters || {};
        const filters = { ...baseFilters, ...additionalFilters };

        const isImpossible = layout?.impossible?.some(combination =>
            filters[combination.place] &&
            combination.manner === row.key &&
            (combination.voiced === undefined || combination.voiced === filters.voiced)
        );

        if (isImpossible) {
            return { phonemes: [], defaultSymbol: "?", impossible: true };
        }

        const matchingPhonemes = consonants.filter(phone =>
            Object.entries(filters).every(([key, value]) => phone[key] === value)
        );

        const defaultSymbol = matchingPhonemes.length > 0 ? matchingPhonemes[0].symbol : '?';

        return {phonemes: matchingPhonemes, defaultSymbol, impossible: false}
    };

    return (
        <div className='consonant-chart'>
            <table className="tg">
                <thead>
                    {/* <tr>
                        <th className="top tg-0lax"></th>
                        {layout.columns.map(col => (
                            <th key={col.key} className="top tg-0lax">{col.label}</th>
                        ))}
                    </tr> */}
                </thead>
                <tbody>                    
                    <tr>
                        <td className="top tg-0lax"></td>
                        {layout.columns.map(col => (
                            <td key={col.key} className="top tg-0lax">{col.label}</td>
                        ))}
                    </tr>
                    {layout.rows.map(row => (
                        <tr key={row.key}>
                            <td className="tg-0lax">{row.label}</td>
                            {layout.columns.map(col => {
                                const { phonemes: voicelessPhonemes, defaultSymbol: voicelessSymbol, impossible: voicelessImpossible } = filterPhonemes(
                                    { [col.key]: true, voiced: false },
                                    row,
                                    layout
                                );
                                const { phonemes: voicedPhonemes, defaultSymbol: voicedSymbol, impossible: voicedImpossible } = filterPhonemes(
                                    { [col.key]: true, voiced: true },
                                    row,
                                    layout
                                );

                                return (
                                    <td key={`${row.key}-${col.key}`} className="tg-0lax no-pad">
                                        <div className="cons-wrapper">
                                            <Consonant
                                                language={languageName}
                                                defaultSymbol={voicelessSymbol}
                                                name={`VL_${col.key}_${row.key}`}
                                                phonemes={voicelessPhonemes}
                                                impossible={voicelessImpossible}
                                            />
                                            <Consonant
                                                language={languageName}
                                                defaultSymbol={voicedSymbol}
                                                name={`V_${col.key}_${row.key}`}
                                                phonemes={voicedPhonemes}
                                                impossible={voicedImpossible}
                                            />
                                        </div>
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}