import React from 'react';
import Consonant from './Consonant';
import {specs, names} from '../../../services/phonemeSpecs';
import './consonants.scss';

export default function ConsonantChart(props) {
    let languageName = props.language ? props.language : 'default';
    let consonants = specs[languageName].consonants;

    let cons = specs[languageName].phonemes.filter(phone =>
        Object.entries({consonant: true}).every(([key, value]) => phone[key] === value)
    )

    let getFilteredPhonemes = features => 
        cons.filter(phone =>
            Object.entries(features).every(([key, value]) => phone[key] === value)
        )

    return (
        <div className='consonant-chart'>
            <table className="tg">
                <tbody>
                    <tr>
                        <td className="top tg-0lax"></td>
                        <td className="top tg-0lax">Bilabial</td>
                        <td className="top tg-0lax">Labiodental</td>
                        <td className="top tg-0lax">Dental</td>
                        <td className="top tg-0lax">Alveolar</td>
                        <td className="top tg-0lax">Postalveolar</td>
                        <td className="top tg-0lax">Retroflex</td>
                        <td className="top tg-0lax">Palatal</td>
                        <td className="top tg-0lax">Velar</td>
                        <td className="top tg-0lax">Uvular</td>
                        <td className="top tg-0lax">Pharyngeal</td>
                        <td className="top tg-0lax">Glottal</td>
                    </tr>
                    <tr>
                        {/* Plosives */}
                        <td className="tg-0lax">Plosive</td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='p'
                                    name='VL_bilabial_plosive'
                                    visible={consonants[names.VL_BILABIAL_PLOSIVE]}
                                    phonemes={getFilteredPhonemes({consonant: true, bilabial: true, stop: true, voiced: false, })}
                                />
                                <Consonant language={languageName}
                                    symbol='b'
                                    name='V_bilabial_plosive'
                                    visible={consonants[names.V_BILABIAL_PLOSIVE]}
                                    phonemes={getFilteredPhonemes({consonant: true, bilabial: true, stop: true, voiced: true, })}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad"></td>
                        <td className="tg-0lax no-pad no-right-border">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} 
                                    symbol='t'
                                    name='VL_dental_plosive'
                                    visible={consonants[names.VL_DENTAL_PLOSIVE]}
                                 />
                                <Consonant language={languageName} 
                                    symbol='d'
                                    name='V_dental_plosive'
                                    visible={consonants[names.V_DENTAL_PLOSIVE]}
                                 />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad no-right-border">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='t'
                                    name='VL_alveolar_plosive'
                                    visible={consonants[names.VL_ALVEOLAR_PLOSIVE]}
                                />
                                <Consonant language={languageName}
                                    symbol='d'
                                    name='V_alveolar_plosive'
                                    visible={consonants[names.V_ALVEOLAR_PLOSIVE]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad"></td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='ʈ'
                                    name='VL_retroflex_plosive'
                                    visible={consonants[names.VL_RETROFLEX_PLOSIVE]}
                                />
                                <Consonant language={languageName}
                                    symbol='ɖ'
                                    name='V_retroflex_plosive'
                                    visible={consonants[names.V_RETROFLEX_PLOSIVE]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='c'
                                    name='VL_palatal_plosive'
                                    visible={consonants[names.VL_PALATAL_PLOSIVE]}
                                />
                                <Consonant language={languageName}
                                    symbol='ɟ'
                                    name='V_palatal_plosive'
                                    visible={consonants[names.V_PALATAL_PLOSIVE]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='k'
                                    name='VL_velar_plosive'
                                    visible={consonants[names.VL_VELAR_PLOSIVE]}
                                />
                                <Consonant language={languageName}
                                    symbol='g'
                                    name='V_velar_plosive'
                                    visible={consonants[names.V_VELAR_PLOSIVE]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='q'
                                    name='VL_uvular_plosive'
                                    visible={consonants[names.VL_UVULAR_PLOSIVE]}
                                />
                                <Consonant language={languageName}
                                    symbol='ɢ'
                                    name='V_uvular_plosive'
                                    visible={consonants[names.V_UVULAR_PLOSIVE]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName} empty impossible />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='ʔ'
                                    name='VL_glottal_plosive'
                                    visible={consonants[names.VL_GLOTTAL_PLOSIVE]}
                                />
                                <Consonant language={languageName} empty impossible />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        {/* Nasals */}
                        <td className="tg-0lax">Nasal</td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    symbol='m'
                                    name='V_bilabial_nasal'
                                    visible={consonants[names.V_BILABIAL_NASAL]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    symbol='ɱ'
                                    name='V_labiodental_nasal'
                                    visible={consonants[names.V_LABIODENTAL_NASAL]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad no-right-border">
                        <div className="cons-wrapper">
                            <Consonant language={languageName} empty />
                            <Consonant language={languageName} 
                                symbol='n'
                                name='V_dental_nasal'
                                visible={consonants[names.V_DENTAL_NASAL]}
                            />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad no-right-border">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    symbol='n'
                                    name='V_alveolar_nasal'
                                    visible={consonants[names.V_ALVEOLAR_NASAL]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad"></td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    symbol='ɳ'
                                    name='V_retroflex_nasal'
                                    visible={consonants[names.V_RETROFLEX_NASAL]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    symbol='ɲ'
                                    name='V_palatal_nasal'
                                    visible={consonants[names.V_PALATAL_NASAL]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    symbol='ŋ'
                                    name='V_velar_nasal'
                                    visible={consonants[names.V_VELAR_NASAL]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    symbol='ɴ'
                                    name='V_uvular_nasal'
                                    visible={consonants[names.V_UVULAR_NASAL]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad impossible"></td>
                        <td className="tg-0lax no-pad impossible"></td>
                    </tr>
                    <tr>
                        {/* Trills */}
                        <td className="tg-0lax">Trill</td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    symbol='ʙ'
                                    name='V_bilabial_trill'
                                    visible={consonants[names.V_BILABIAL_TRILL]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad"></td>
                        <td className="tg-0lax no-pad no-right-border"></td>
                        <td className="tg-0lax no-pad no-right-border">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    symbol='r'
                                    name='V_alveolar_trill'
                                    visible={consonants[names.V_ALVEOLAR_TRILL]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad"></td>
                        <td className="tg-0lax no-pad"></td>
                        <td className="tg-0lax no-pad"></td>
                        <td className="tg-0lax no-pad impossible"></td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    symbol='ʀ'
                                    name='V_uvular_trill'
                                    visible={consonants[names.V_UVULAR_TRILL]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad"></td>
                        <td className="tg-0lax no-pad impossible"></td>
                    </tr>
                    <tr>
                        {/* Flaps */}
                        <td className="tg-0lax">Tap / flap</td>
                        <td className="tg-0lax no-pad"></td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    symbol='ⱱ'
                                    name='V_labiodental_flap'
                                    visible={consonants[names.V_LABIODENTAL_FLAP]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad no-right-border"></td>
                        <td className="tg-0lax no-pad no-right-border">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    symbol='ɾ'
                                    name='V_alveolar_tap'
                                    visible={consonants[names.V_ALVEOLAR_TAP]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad"></td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    symbol='ɽ'
                                    name='V_retroflex_flap'
                                    visible={consonants[names.V_RETROFLEX_FLAP]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad"></td>
                        <td className="tg-0lax no-pad impossible"></td>
                        <td className="tg-0lax no-pad"></td>
                        <td className="tg-0lax no-pad"></td>
                        <td className="tg-0lax no-pad impossible"></td>
                    </tr>
                    <tr>
                        {/* Fricatives */}
                        <td className="tg-0lax">Fricative</td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='ɸ'
                                    name='VL_bilabial_fricative'
                                    visible={consonants[names.VL_BILABIAL_FRICATIVE]}
                                />
                                <Consonant language={languageName}
                                    symbol='β'
                                    name='V_bilabial_fricative'
                                    visible={consonants[names.V_BILABIAL_FRICATIVE]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='f'
                                    name='VL_labiodental_fricative'
                                    visible={consonants[names.VL_LABIODENTAL_FRICATIVE]}
                                />
                                <Consonant language={languageName}
                                    symbol='v'
                                    name='V_labiodental_fricative'
                                    visible={consonants[names.V_LABIODENTAL_FRICATIVE]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='θ'
                                    name='VL_dental_fricative'
                                    visible={consonants[names.VL_DENTAL_FRICATIVE]}
                                />
                                <Consonant language={languageName}
                                    symbol='ð'
                                    name='V_dental_fricative'
                                    visible={consonants[names.V_DENTAL_FRICATIVE]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='s'
                                    name='VL_alveolar_fricative'
                                    visible={consonants[names.VL_ALVEOLAR_FRICATIVE]}
                                />
                                <Consonant language={languageName}
                                    symbol='z'
                                    name='V_alveolar_fricative'
                                    visible={consonants[names.V_ALVEOLAR_FRICATIVE]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='ʃ'
                                    name='VL_postalveolar_fricative'
                                    visible={consonants[names.VL_POSTALVEOLAR_FRICATIVE]}
                                />
                                <Consonant language={languageName}
                                    symbol='ʒ'
                                    name='V_postalveolar_fricative'
                                    visible={consonants[names.V_POSTALVEOLAR_FRICATIVE]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='ʂ'
                                    name='VL_retroflex_fricative'
                                    visible={consonants[names.VL_RETROFLEX_FRICATIVE]}
                                />
                                <Consonant language={languageName}
                                    symbol='ʐ'
                                    name='V_retroflex_fricative'
                                    visible={consonants[names.V_RETROFLEX_FRICATIVE]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='ç'
                                    name='VL_palatal_fricative'
                                    visible={consonants[names.VL_PALATAL_FRICATIVE]}
                                />
                                <Consonant language={languageName}
                                    symbol='ʝ'
                                    name='V_palatal_fricative'
                                    visible={consonants[names.V_PALATAL_FRICATIVE]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='x'
                                    name='VL_velar_fricative'
                                    visible={consonants[names.VL_VELAR_FRICATIVE]}
                                />
                                <Consonant language={languageName}
                                    symbol='ɣ'
                                    name='V_velar_fricative'
                                    visible={consonants[names.V_VELAR_FRICATIVE]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='χ'
                                    name='VL_uvular_fricative'
                                    visible={consonants[names.VL_UVULAR_FRICATIVE]}
                                />
                                <Consonant language={languageName}
                                    symbol='ʁ'
                                    name='V_uvular_fricative'
                                    visible={consonants[names.V_UVULAR_FRICATIVE]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='ħ'
                                    name='VL_pharyngeal_fricative'
                                    visible={consonants[names.VL_PHARYNGEAL_FRICATIVE]}
                                />
                                <Consonant language={languageName}
                                    symbol='ʕ'
                                    name='V_pharyngeal_fricative'
                                    visible={consonants[names.V_PHARYNGEAL_FRICATIVE]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='h'
                                    name='VL_glottal_fricative'
                                    visible={consonants[names.VL_GLOTTAL_FRICATIVE]}
                                />
                                <Consonant language={languageName}
                                    symbol='ɦ'
                                    name='V_glottal_fricative'
                                    visible={consonants[names.V_GLOTTAL_FRICATIVE]}
                                />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        {/* Lateral fricatives */}
                        <td className="tg-0lax">Lateral fricative</td>
                        <td className="tg-0lax no-pad impossible"></td>
                        <td className="tg-0lax no-pad impossible"></td>
                        <td className="tg-0lax no-pad no-right-border"></td>
                        <td className="tg-0lax no-pad no-right-border">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='ɬ'
                                    name='VL_alveolar_lateral_fricative'
                                    visible={consonants[names.VL_ALVEOLAR_LATERAL_FRICATIVE]}
                                />
                                <Consonant language={languageName}
                                    symbol='ɮ'
                                    name='V_alveolar_lateral_fricative'
                                    visible={consonants[names.V_ALVEOLAR_LATERAL_FRICATIVE]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad"></td>
                        <td className="tg-0lax no-pad"></td>
                        <td className="tg-0lax no-pad"></td>
                        <td className="tg-0lax no-pad"></td>
                        <td className="tg-0lax no-pad"></td>
                        <td className="tg-0lax no-pad impossible"></td>
                        <td className="tg-0lax no-pad impossible"></td>
                    </tr>
                    <tr>
                        {/* Approximants */}
                        <td className="tg-0lax">Approximant</td>
                        <td className="tg-0lax no-pad"></td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    symbol='ʋ'
                                    name='V_labiodental_approximant'
                                    visible={consonants[names.V_LABIODENTAL_APPROXIMANT]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad no-right-border"></td>
                        <td className="tg-0lax no-pad no-right-border">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    symbol='ɹ'
                                    name='V_alveolar_approximant'
                                    visible={consonants[names.V_ALVEOLAR_APPROXIMANT]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad"></td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    symbol='ɻ'
                                    name='V_retroflex_approximant'
                                    visible={consonants[names.V_RETROFLEX_APPROXIMANT]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    symbol='j'
                                    name='V_palatal_approximant'
                                    visible={consonants[names.V_PALATAL_APPROXIMANT]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    symbol='ɰ'
                                    name='V_velar_approximant'
                                    visible={consonants[names.V_VELAR_APPROXIMANT]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad"></td>
                        <td className="tg-0lax no-pad"></td>
                        <td className="tg-0lax no-pad impossible"></td>
                    </tr>
                    <tr>
                        {/* Lateral approximants */}
                        <td className="tg-0lax lat-ap">Lateral approximant</td>
                        <td className="tg-0lax no-pad impossible"></td>
                        <td className="tg-0lax no-pad impossible"></td>
                        <td className="tg-0lax no-pad no-right-border">
                        <div className="cons-wrapper">
                            <Consonant language={languageName} empty />
                            <Consonant language={languageName} 
                                symbol='l'
                                name='V_dental_lateral_approximant'
                                visible={consonants[names.V_DENTAL_LATERAL_APPROXIMANT]}
                            />
                        </div>
                        </td>
                        <td className="tg-0lax no-pad no-right-border">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    symbol='l'
                                    name='V_alveolar_lateral_approximant'
                                    visible={consonants[names.V_ALVEOLAR_LATERAL_APPROXIMANT]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad"></td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    symbol='ɭ'
                                    name='V_retroflex_lateral_approximant'
                                    visible={consonants[names.V_RETROFLEX_LATERAL_APPROXIMANT]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    symbol='ʎ'
                                    name='V_palatal_lateral_approximant'
                                    visible={consonants[names.V_PALATAL_LATERAL_APPROXIMANT]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    symbol='ʟ'
                                    name='V_velar_lateral_approximant'
                                    visible={consonants[names.V_VELAR_LATERAL_APPROXIMANT]}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad"></td>
                        <td className="tg-0lax no-pad impossible"></td>
                        <td className="tg-0lax no-pad impossible"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}