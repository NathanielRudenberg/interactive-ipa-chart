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
                                    phonemes={getFilteredPhonemes({bilabial: true, stop: true, voiced: false, })}
                                />
                                <Consonant language={languageName}
                                    symbol='b'
                                    name='V_bilabial_plosive'
                                    phonemes={getFilteredPhonemes({bilabial: true, stop: true, voiced: true, })}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad"></td>
                        <td className="tg-0lax no-pad no-right-border">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} 
                                    symbol='t'
                                    name='VL_dental_plosive'
                                    // phonemes={getFilteredPhonemes({dental: true, stop: true, })}
                                 />
                                <Consonant language={languageName} 
                                    symbol='d'
                                    name='V_dental_plosive'
                                    // phonemes={getFilteredPhonemes({dental: true, stop: true, voiced: true, })}
                                 />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad no-right-border">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='t'
                                    name='VL_alveolar_plosive'
                                    phonemes={getFilteredPhonemes({alveolar: true, stop: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    symbol='d'
                                    name='V_alveolar_plosive'
                                    phonemes={getFilteredPhonemes({alveolar: true, stop: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad"></td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='ʈ'
                                    name='VL_retroflex_plosive'
                                    phonemes={getFilteredPhonemes({retroflex: true, stop: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    symbol='ɖ'
                                    name='V_retroflex_plosive'
                                    phonemes={getFilteredPhonemes({retroflex: true, stop: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='c'
                                    name='VL_palatal_plosive'
                                    phonemes={getFilteredPhonemes({palatal: true, stop: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    symbol='ɟ'
                                    name='V_palatal_plosive'
                                    phonemes={getFilteredPhonemes({palatal: true, stop: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='k'
                                    name='VL_velar_plosive'
                                    phonemes={getFilteredPhonemes({velar: true, stop: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    symbol='g'
                                    name='V_velar_plosive'
                                    phonemes={getFilteredPhonemes({velar: true, nasal: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='q'
                                    name='VL_uvular_plosive'
                                    phonemes={getFilteredPhonemes({uvular: true, stop: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    symbol='ɢ'
                                    name='V_uvular_plosive'
                                    phonemes={getFilteredPhonemes({uvular: true, stop: true, voiced: true})}
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
                                    phonemes={getFilteredPhonemes({laryngeal: true, stop: true, voiced: false})}
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
                                    phonemes={getFilteredPhonemes({bilabial: true, nasal: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    symbol='ɱ'
                                    name='V_labiodental_nasal'
                                    phonemes={getFilteredPhonemes({labiodental: true, nasal: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad no-right-border">
                        <div className="cons-wrapper">
                            <Consonant language={languageName} empty />
                            <Consonant language={languageName} 
                                symbol='n'
                                name='V_dental_nasal'
                            />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad no-right-border">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    symbol='n'
                                    name='V_alveolar_nasal'
                                    phonemes={getFilteredPhonemes({alveolar: true, nasal: true, voiced: true})}
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
                                    phonemes={getFilteredPhonemes({retroflex: true, nasal: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    symbol='ɲ'
                                    name='V_palatal_nasal'
                                    phonemes={getFilteredPhonemes({palatal: true, nasal: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    symbol='ŋ'
                                    name='V_velar_nasal'
                                    phonemes={getFilteredPhonemes({velar: true, nasal: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    symbol='ɴ'
                                    name='V_uvular_nasal'
                                    phonemes={getFilteredPhonemes({uvular: true, nasal: true, voiced: true})}
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
                                    phonemes={getFilteredPhonemes({bilabial: true, trill: true, voiced: true})}
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
                                    phonemes={getFilteredPhonemes({alveolar: true, trill: true, voiced: true})}
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
                                    phonemes={getFilteredPhonemes({uvular: true, trill: true, voiced: true})}
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
                                    phonemes={getFilteredPhonemes({labiodental: true, flap: true, voiced: true})}
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
                                    phonemes={getFilteredPhonemes({alveolar: true, flap: true, voiced: true})}
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
                                    phonemes={getFilteredPhonemes({retroflex: true, flap: true, voiced: true})}
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
                                    phonemes={getFilteredPhonemes({bilabial: true, fricative: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    symbol='β'
                                    name='V_bilabial_fricative'
                                    phonemes={getFilteredPhonemes({bilabial: true, fricative: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='f'
                                    name='VL_labiodental_fricative'
                                    phonemes={getFilteredPhonemes({labiodental: true, fricative: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    symbol='v'
                                    name='V_labiodental_fricative'
                                    phonemes={getFilteredPhonemes({labiodental: true, fricative: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='θ'
                                    name='VL_dental_fricative'
                                    phonemes={getFilteredPhonemes({dental: true, fricative: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    symbol='ð'
                                    name='V_dental_fricative'
                                    phonemes={getFilteredPhonemes({dental: true, fricative: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='s'
                                    name='VL_alveolar_fricative'
                                    phonemes={getFilteredPhonemes({alveolar: true, fricative: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    symbol='z'
                                    name='V_alveolar_fricative'
                                    phonemes={getFilteredPhonemes({alveolar: true, fricative: true, lateral: false, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='ʃ'
                                    name='VL_postalveolar_fricative'
                                    phonemes={getFilteredPhonemes({alveopalatal: true, fricative: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    symbol='ʒ'
                                    name='V_postalveolar_fricative'
                                    phonemes={getFilteredPhonemes({alveopalatal: true, fricative: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='ʂ'
                                    name='VL_retroflex_fricative'
                                    phonemes={getFilteredPhonemes({retroflex: true, fricative: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    symbol='ʐ'
                                    name='V_retroflex_fricative'
                                    phonemes={getFilteredPhonemes({retroflex: true, fricative: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='ç'
                                    name='VL_palatal_fricative'
                                    phonemes={getFilteredPhonemes({palatal: true, fricative: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    symbol='ʝ'
                                    name='V_palatal_fricative'
                                    phonemes={getFilteredPhonemes({palatal: true, fricative: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='x'
                                    name='VL_velar_fricative'
                                    phonemes={getFilteredPhonemes({velar: true, fricative: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    symbol='ɣ'
                                    name='V_velar_fricative'
                                    phonemes={getFilteredPhonemes({velar: true, fricative: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='χ'
                                    name='VL_uvular_fricative'
                                    phonemes={getFilteredPhonemes({uvular: true, fricative: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    symbol='ʁ'
                                    name='V_uvular_fricative'
                                    phonemes={getFilteredPhonemes({uvular: true, fricative: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='ħ'
                                    name='VL_pharyngeal_fricative'
                                    phonemes={getFilteredPhonemes({pharyngeal: true, fricative: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    symbol='ʕ'
                                    name='V_pharyngeal_fricative'
                                    phonemes={getFilteredPhonemes({pharyngeal: true, fricative: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    symbol='h'
                                    name='VL_glottal_fricative'
                                    phonemes={getFilteredPhonemes({laryngeal: true, fricative: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    symbol='ɦ'
                                    name='V_glottal_fricative'
                                    phonemes={getFilteredPhonemes({laryngeal: true, fricative: true, voiced: true})}
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
                                    phonemes={getFilteredPhonemes({alveolar: true, lateral: true, fricative: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    symbol='ɮ'
                                    name='V_alveolar_lateral_fricative'
                                    phonemes={getFilteredPhonemes({alveolar: true, lateral: true, fricative: true, voiced: true})}
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
                                    phonemes={getFilteredPhonemes({labiodental: true, approximant: true, voiced: true})}
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
                                    phonemes={getFilteredPhonemes({alveolar: true, voiced: true, approximant: true})}
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
                                    phonemes={getFilteredPhonemes({retroflex: true, approximant: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    symbol='j'
                                    name='V_palatal_approximant'
                                    phonemes={getFilteredPhonemes({palatal: true, approximant: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    symbol='ɰ'
                                    name='V_velar_approximant'
                                    phonemes={getFilteredPhonemes({velar: true, approximant: true, voiced: true})}
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
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad no-right-border">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    symbol='l'
                                    name='V_alveolar_lateral_approximant'
                                    phonemes={getFilteredPhonemes({alveolar: true, lateral: true, approximant: true, voiced: true})}
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
                                    phonemes={getFilteredPhonemes({retroflex: true, lateral: true, approximant: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    symbol='ʎ'
                                    name='V_palatal_lateral_approximant'
                                    phonemes={getFilteredPhonemes({palatal: true, lateral: true, approximant: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    symbol='ʟ'
                                    name='V_velar_lateral_approximant'
                                    phonemes={getFilteredPhonemes({velar: true, lateral: true, approximant: true, voiced: true})}
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