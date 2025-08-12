import React from 'react';
import Consonant from './Consonant';
import {specs, names} from '../../../services/phonemeSpecs';
import './consonants.scss';

export default function ConsonantChart(props) {
    let languageName = props.language ? props.language : 'default';

    let consonants = specs[languageName].phonemes.filter(phone =>
        Object.entries({consonant: true}).every(([key, value]) => phone[key] === value)
    )

    let getFilteredPhonemes = features => 
        consonants.filter(phone =>
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
                                    defaultSymbol='p'
                                    name='VL_bilabial_plosive'
                                    phonemes={getFilteredPhonemes({bilabial: true, stop: true, voiced: false, })}
                                />
                                <Consonant language={languageName}
                                    defaultSymbol='b'
                                    name='V_bilabial_plosive'
                                    phonemes={getFilteredPhonemes({bilabial: true, stop: true, voiced: true, })}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad"></td>
                        <td className="tg-0lax no-pad no-right-border">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} 
                                    defaultSymbol='t'
                                    name='VL_dental_plosive'
                                    // phonemes={getFilteredPhonemes({dental: true, stop: true, })}
                                 />
                                <Consonant language={languageName} 
                                    defaultSymbol='d'
                                    name='V_dental_plosive'
                                    // phonemes={getFilteredPhonemes({dental: true, stop: true, voiced: true, })}
                                 />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad no-right-border">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    defaultSymbol='t'
                                    name='VL_alveolar_plosive'
                                    phonemes={getFilteredPhonemes({alveolar: true, stop: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    defaultSymbol='d'
                                    name='V_alveolar_plosive'
                                    phonemes={getFilteredPhonemes({alveolar: true, stop: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad"></td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    defaultSymbol='ʈ'
                                    name='VL_retroflex_plosive'
                                    phonemes={getFilteredPhonemes({retroflex: true, stop: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    defaultSymbol='ɖ'
                                    name='V_retroflex_plosive'
                                    phonemes={getFilteredPhonemes({retroflex: true, stop: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    defaultSymbol='c'
                                    name='VL_palatal_plosive'
                                    phonemes={getFilteredPhonemes({palatal: true, stop: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    defaultSymbol='ɟ'
                                    name='V_palatal_plosive'
                                    phonemes={getFilteredPhonemes({palatal: true, stop: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    defaultSymbol='k'
                                    name='VL_velar_plosive'
                                    phonemes={getFilteredPhonemes({velar: true, stop: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    defaultSymbol='g'
                                    name='V_velar_plosive'
                                    phonemes={getFilteredPhonemes({velar: true, stop: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    defaultSymbol='q'
                                    name='VL_uvular_plosive'
                                    phonemes={getFilteredPhonemes({uvular: true, stop: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    defaultSymbol='ɢ'
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
                                    defaultSymbol='ʔ'
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
                                <Consonant language={languageName}
                                    defaultSymbol='m̥'
                                    name='VL_bilabial_nasal'
                                    phonemes={getFilteredPhonemes({bilabial: true, nasal: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    defaultSymbol='m'
                                    name='V_bilabial_nasal'
                                    phonemes={getFilteredPhonemes({bilabial: true, nasal: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    defaultSymbol='ɱ'
                                    name='V_labiodental_nasal'
                                    phonemes={getFilteredPhonemes({labiodental: true, nasal: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad no-right-border">
                        <div className="cons-wrapper">
                            <Consonant language={languageName} empty />
                            <Consonant language={languageName} 
                                defaultSymbol='n'
                                name='V_dental_nasal'
                            />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad no-right-border">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    defaultSymbol="n̥"
                                    name="VL_alveolar_nasal"
                                    phonemes={getFilteredPhonemes({alveolar: true, nasal: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    defaultSymbol='n'
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
                                    defaultSymbol='ɳ'
                                    name='V_retroflex_nasal'
                                    phonemes={getFilteredPhonemes({retroflex: true, nasal: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    defaultSymbol='ɲ̊'
                                    name='VL_palatal_nasal'
                                    phonemes={getFilteredPhonemes({palatal: true, nasal: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    defaultSymbol='ɲ'
                                    name='V_palatal_nasal'
                                    phonemes={getFilteredPhonemes({palatal: true, nasal: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    defaultSymbol='ŋ̊'
                                    name='VL_velar_nasal'
                                    phonemes={getFilteredPhonemes({velar: true, nasal: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    defaultSymbol='ŋ'
                                    name='V_velar_nasal'
                                    phonemes={getFilteredPhonemes({velar: true, nasal: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    defaultSymbol='ɴ'
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
                                    defaultSymbol='ʙ'
                                    name='V_bilabial_trill'
                                    phonemes={getFilteredPhonemes({bilabial: true, trill: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad"></td>
                        <td className="tg-0lax no-pad no-right-border"></td>
                        <td className="tg-0lax no-pad no-right-border">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty
                                    defaultSymbol='r̥'
                                    name='VL_alveolar_trill'
                                    phonemes={getFilteredPhonemes({alveolar: true, trill: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    defaultSymbol='r'
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
                                    defaultSymbol='ʀ'
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
                                    defaultSymbol='ⱱ'
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
                                    defaultSymbol='ɾ'
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
                                    defaultSymbol='ɽ'
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
                                    defaultSymbol='ɸ'
                                    name='VL_bilabial_fricative'
                                    phonemes={getFilteredPhonemes({bilabial: true, fricative: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    defaultSymbol='β'
                                    name='V_bilabial_fricative'
                                    phonemes={getFilteredPhonemes({bilabial: true, fricative: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    defaultSymbol='f'
                                    name='VL_labiodental_fricative'
                                    phonemes={getFilteredPhonemes({labiodental: true, fricative: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    defaultSymbol='v'
                                    name='V_labiodental_fricative'
                                    phonemes={getFilteredPhonemes({labiodental: true, fricative: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    defaultSymbol='θ'
                                    name='VL_dental_fricative'
                                    phonemes={getFilteredPhonemes({dental: true, fricative: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    defaultSymbol='ð'
                                    name='V_dental_fricative'
                                    phonemes={getFilteredPhonemes({dental: true, fricative: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    defaultSymbol='s'
                                    name='VL_alveolar_fricative'
                                    phonemes={getFilteredPhonemes({alveolar: true, lateral: false, fricative: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    defaultSymbol='z'
                                    name='V_alveolar_fricative'
                                    phonemes={getFilteredPhonemes({alveolar: true, fricative: true, lateral: false, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    defaultSymbol='ʃ'
                                    name='VL_postalveolar_fricative'
                                    phonemes={getFilteredPhonemes({alveopalatal: true, fricative: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    defaultSymbol='ʒ'
                                    name='V_postalveolar_fricative'
                                    phonemes={getFilteredPhonemes({alveopalatal: true, fricative: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    defaultSymbol='ʂ'
                                    name='VL_retroflex_fricative'
                                    phonemes={getFilteredPhonemes({retroflex: true, fricative: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    defaultSymbol='ʐ'
                                    name='V_retroflex_fricative'
                                    phonemes={getFilteredPhonemes({retroflex: true, fricative: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    defaultSymbol='ç'
                                    name='VL_palatal_fricative'
                                    phonemes={getFilteredPhonemes({palatal: true, fricative: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    defaultSymbol='ʝ'
                                    name='V_palatal_fricative'
                                    phonemes={getFilteredPhonemes({palatal: true, fricative: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    defaultSymbol='x'
                                    name='VL_velar_fricative'
                                    phonemes={getFilteredPhonemes({velar: true, fricative: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    defaultSymbol='ɣ'
                                    name='V_velar_fricative'
                                    phonemes={getFilteredPhonemes({velar: true, fricative: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    defaultSymbol='χ'
                                    name='VL_uvular_fricative'
                                    phonemes={getFilteredPhonemes({uvular: true, fricative: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    defaultSymbol='ʁ'
                                    name='V_uvular_fricative'
                                    phonemes={getFilteredPhonemes({uvular: true, fricative: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    defaultSymbol='ħ'
                                    name='VL_pharyngeal_fricative'
                                    phonemes={getFilteredPhonemes({pharyngeal: true, fricative: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    defaultSymbol='ʕ'
                                    name='V_pharyngeal_fricative'
                                    phonemes={getFilteredPhonemes({pharyngeal: true, fricative: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    defaultSymbol='h'
                                    name='VL_glottal_fricative'
                                    phonemes={getFilteredPhonemes({laryngeal: true, fricative: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    defaultSymbol='ɦ'
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
                                    defaultSymbol='ɬ'
                                    name='VL_alveolar_lateral_fricative'
                                    phonemes={getFilteredPhonemes({alveolar: true, lateral: true, fricative: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    defaultSymbol='ɮ'
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
                                    defaultSymbol='ʋ'
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
                                    defaultSymbol='ɹ'
                                    name='V_alveolar_approximant'
                                    phonemes={getFilteredPhonemes({alveolar: true, lateral: false, voiced: true, approximant: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad"></td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    defaultSymbol='ɻ'
                                    name='V_retroflex_approximant'
                                    phonemes={getFilteredPhonemes({retroflex: true, lateral: false, approximant: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    defaultSymbol='j'
                                    name='V_palatal_approximant'
                                    phonemes={getFilteredPhonemes({palatal: true, lateral: false, approximant: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    defaultSymbol='ɰ'
                                    name='V_velar_approximant'
                                    phonemes={getFilteredPhonemes({velar: true, lateral: false, approximant: true, voiced: true})}
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
                                    defaultSymbol='l'
                                    name='V_dental_lateral_approximant'
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad no-right-border">
                            <div className="cons-wrapper">
                                <Consonant language={languageName}
                                    defaultSymbol='l̥'
                                    name='VL_alveolar_lateral_approximant'
                                    phonemes={getFilteredPhonemes({alveolar: true, lateral: true, approximant: true, voiced: false})}
                                />
                                <Consonant language={languageName}
                                    defaultSymbol='l'
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
                                    defaultSymbol='ɭ'
                                    name='V_retroflex_lateral_approximant'
                                    phonemes={getFilteredPhonemes({retroflex: true, lateral: true, approximant: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    defaultSymbol='ʎ'
                                    name='V_palatal_lateral_approximant'
                                    phonemes={getFilteredPhonemes({palatal: true, lateral: true, approximant: true, voiced: true})}
                                />
                            </div>
                        </td>
                        <td className="tg-0lax no-pad">
                            <div className="cons-wrapper">
                                <Consonant language={languageName} empty />
                                <Consonant language={languageName}
                                    defaultSymbol='ʟ'
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