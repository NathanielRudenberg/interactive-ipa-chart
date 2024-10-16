import React from 'react';
import Consonant from './Consonant';
import {specs, names} from '../../../services/phonemeSpecs';
import './consonants.scss';

export default function ConsonantChart(props) {
    let languageName = props.language ? props.language : 'default';
    let consonants = specs[languageName].consonants;

    return (
        <div class='consonant-chart'>
            <table class="tg">
                <tbody>
                    <tr>
                        <td class="top tg-0lax"></td>
                        <td class="top tg-0lax">Bilabial</td>
                        <td class="top tg-0lax">Labiodental</td>
                        <td class="top tg-0lax">Dental</td>
                        <td class="top tg-0lax">Alveolar</td>
                        <td class="top tg-0lax">Postalveolar</td>
                        <td class="top tg-0lax">Retroflex</td>
                        <td class="top tg-0lax">Palatal</td>
                        <td class="top tg-0lax">Velar</td>
                        <td class="top tg-0lax">Uvular</td>
                        <td class="top tg-0lax">Pharyngeal</td>
                        <td class="top tg-0lax">Glottal</td>
                    </tr>
                    <tr>
                        {/* Plosives */}
                        <td class="tg-0lax">Plosive</td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='p'
                                    name='VL_bilabial_plosive'
                                    visible={consonants[names.VL_BILABIAL_PLOSIVE]}
                                />
                                <Consonant
                                    symbol='b'
                                    name='V_bilabial_plosive'
                                    visible={consonants[names.V_BILABIAL_PLOSIVE]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad no-right-border"></td>
                        <td class="tg-0lax no-pad no-right-border">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='t'
                                    name='VL_alveolar_plosive'
                                    visible={consonants[names.VL_ALVEOLAR_PLOSIVE]}
                                />
                                <Consonant
                                    symbol='d'
                                    name='V_alveolar_plosive'
                                    visible={consonants[names.V_ALVEOLAR_PLOSIVE]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='ʈ'
                                    name='VL_retroflex_plosive'
                                    visible={consonants[names.VL_RETROFLEX_PLOSIVE]}
                                />
                                <Consonant
                                    symbol='ɖ'
                                    name='V_retroflex_plosive'
                                    visible={consonants[names.V_RETROFLEX_PLOSIVE]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='c'
                                    name='VL_palatal_plosive'
                                    visible={consonants[names.VL_PALATAL_PLOSIVE]}
                                />
                                <Consonant
                                    symbol='ɟ'
                                    name='V_palatal_plosive'
                                    visible={consonants[names.V_PALATAL_PLOSIVE]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='k'
                                    name='VL_velar_plosive'
                                    visible={consonants[names.VL_VELAR_PLOSIVE]}
                                />
                                <Consonant
                                    symbol='g'
                                    name='V_velar_plosive'
                                    visible={consonants[names.V_VELAR_PLOSIVE]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='q'
                                    name='VL_uvular_plosive'
                                    visible={consonants[names.VL_UVULAR_PLOSIVE]}
                                />
                                <Consonant
                                    symbol='ɢ'
                                    name='V_uvular_plosive'
                                    visible={consonants[names.V_UVULAR_PLOSIVE]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant empty impossible />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='ʔ'
                                    name='VL_glottal_plosive'
                                    visible={consonants[names.VL_GLOTTAL_PLOSIVE]}
                                />
                                <Consonant empty impossible />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        {/* Nasals */}
                        <td class="tg-0lax">Nasal</td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='m'
                                    name='V_bilabial_nasal'
                                    visible={consonants[names.V_BILABIAL_NASAL]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='ɱ'
                                    name='V_labiodental_nasal'
                                    visible={consonants[names.V_LABIODENTAL_NASAL]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad no-right-border"></td>
                        <td class="tg-0lax no-pad no-right-border">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='n'
                                    name='V_alveolar_nasal'
                                    visible={consonants[names.V_ALVEOLAR_NASAL]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='ɳ'
                                    name='V_retroflex_nasal'
                                    visible={consonants[names.V_RETROFLEX_NASAL]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='ɲ'
                                    name='V_palatal_nasal'
                                    visible={consonants[names.V_PALATAL_NASAL]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='ŋ'
                                    name='V_velar_nasal'
                                    visible={consonants[names.V_VELAR_NASAL]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='ɴ'
                                    name='V_uvular_nasal'
                                    visible={consonants[names.V_UVULAR_NASAL]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad impossible"></td>
                        <td class="tg-0lax no-pad impossible"></td>
                    </tr>
                    <tr>
                        {/* Trills */}
                        <td class="tg-0lax">Trill</td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='ʙ'
                                    name='V_bilabial_trill'
                                    visible={consonants[names.V_BILABIAL_TRILL]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad no-right-border"></td>
                        <td class="tg-0lax no-pad no-right-border">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='r'
                                    name='V_alveolar_trill'
                                    visible={consonants[names.V_ALVEOLAR_TRILL]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad impossible"></td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='ʀ'
                                    name='V_uvular_trill'
                                    visible={consonants[names.V_UVULAR_TRILL]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad impossible"></td>
                    </tr>
                    <tr>
                        {/* Flaps */}
                        <td class="tg-0lax">Tap / flap</td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='ⱱ'
                                    name='V_labiodental_flap'
                                    visible={consonants[names.V_LABIODENTAL_FLAP]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad no-right-border"></td>
                        <td class="tg-0lax no-pad no-right-border">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='ɾ'
                                    name='V_alveolar_tap'
                                    visible={consonants[names.V_ALVEOLAR_TAP]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='ɽ'
                                    name='V_retroflex_flap'
                                    visible={consonants[names.V_RETROFLEX_FLAP]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad impossible"></td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad impossible"></td>
                    </tr>
                    <tr>
                        {/* Fricatives */}
                        <td class="tg-0lax">Fricative</td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='ɸ'
                                    name='VL_bilabial_fricative'
                                    visible={consonants[names.VL_BILABIAL_FRICATIVE]}
                                />
                                <Consonant
                                    symbol='β'
                                    name='V_bilabial_fricative'
                                    visible={consonants[names.V_BILABIAL_FRICATIVE]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='f'
                                    name='VL_labiodental_fricative'
                                    visible={consonants[names.VL_LABIODENTAL_FRICATIVE]}
                                />
                                <Consonant
                                    symbol='v'
                                    name='V_labiodental_fricative'
                                    visible={consonants[names.V_LABIODENTAL_FRICATIVE]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='θ'
                                    name='VL_dental_fricative'
                                    visible={consonants[names.VL_DENTAL_FRICATIVE]}
                                />
                                <Consonant
                                    symbol='ð'
                                    name='V_dental_fricative'
                                    visible={consonants[names.V_DENTAL_FRICATIVE]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='s'
                                    name='VL_alveolar_fricative'
                                    visible={consonants[names.VL_ALVEOLAR_FRICATIVE]}
                                />
                                <Consonant
                                    symbol='z'
                                    name='V_alveolar_fricative'
                                    visible={consonants[names.V_ALVEOLAR_FRICATIVE]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='ʃ'
                                    name='VL_postalveolar_fricative'
                                    visible={consonants[names.VL_POSTALVEOLAR_FRICATIVE]}
                                />
                                <Consonant
                                    symbol='ʒ'
                                    name='V_postalveolar_fricative'
                                    visible={consonants[names.V_POSTALVEOLAR_FRICATIVE]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='ʂ'
                                    name='VL_retroflex_fricative'
                                    visible={consonants[names.VL_RETROFLEX_FRICATIVE]}
                                />
                                <Consonant
                                    symbol='ʐ'
                                    name='V_retroflex_fricative'
                                    visible={consonants[names.V_RETROFLEX_FRICATIVE]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='ç'
                                    name='VL_palatal_fricative'
                                    visible={consonants[names.VL_PALATAL_FRICATIVE]}
                                />
                                <Consonant
                                    symbol='ʝ'
                                    name='V_palatal_fricative'
                                    visible={consonants[names.V_PALATAL_FRICATIVE]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='x'
                                    name='VL_velar_fricative'
                                    visible={consonants[names.VL_VELAR_FRICATIVE]}
                                />
                                <Consonant
                                    symbol='ɣ'
                                    name='V_velar_fricative'
                                    visible={consonants[names.V_VELAR_FRICATIVE]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='χ'
                                    name='VL_uvular_fricative'
                                    visible={consonants[names.VL_UVULAR_FRICATIVE]}
                                />
                                <Consonant
                                    symbol='ʁ'
                                    name='V_uvular_fricative'
                                    visible={consonants[names.V_UVULAR_FRICATIVE]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='ħ'
                                    name='VL_pharyngeal_fricative'
                                    visible={consonants[names.VL_PHARYNGEAL_FRICATIVE]}
                                />
                                <Consonant
                                    symbol='ʕ'
                                    name='V_pharyngeal_fricative'
                                    visible={consonants[names.V_PHARYNGEAL_FRICATIVE]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='h'
                                    name='VL_glottal_fricative'
                                    visible={consonants[names.VL_GLOTTAL_FRICATIVE]}
                                />
                                <Consonant
                                    symbol='ɦ'
                                    name='V_glottal_fricative'
                                    visible={consonants[names.V_GLOTTAL_FRICATIVE]}
                                />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        {/* Lateral fricatives */}
                        <td class="tg-0lax">Lateral fricative</td>
                        <td class="tg-0lax no-pad impossible"></td>
                        <td class="tg-0lax no-pad impossible"></td>
                        <td class="tg-0lax no-pad no-right-border"></td>
                        <td class="tg-0lax no-pad no-right-border">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='ɬ'
                                    name='VL_alveolar_lateral_fricative'
                                    visible={consonants[names.VL_ALVEOLAR_LATERAL_FRICATIVE]}
                                />
                                <Consonant
                                    symbol='ɮ'
                                    name='V_alveolar_lateral_fricative'
                                    visible={consonants[names.V_ALVEOLAR_LATERAL_FRICATIVE]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad impossible"></td>
                        <td class="tg-0lax no-pad impossible"></td>
                    </tr>
                    <tr>
                        {/* Approximants */}
                        <td class="tg-0lax">Approximant</td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='ʋ'
                                    name='V_labiodental_approximant'
                                    visible={consonants[names.V_LABIODENTAL_APPROXIMANT]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad no-right-border"></td>
                        <td class="tg-0lax no-pad no-right-border">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='ɹ'
                                    name='V_alveolar_approximant'
                                    visible={consonants[names.V_ALVEOLAR_APPROXIMANT]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='ɻ'
                                    name='V_retroflex_approximant'
                                    visible={consonants[names.V_RETROFLEX_APPROXIMANT]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='j'
                                    name='V_palatal_approximant'
                                    visible={consonants[names.V_PALATAL_APPROXIMANT]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='ɰ'
                                    name='V_velar_approximant'
                                    visible={consonants[names.V_VELAR_APPROXIMANT]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad impossible"></td>
                    </tr>
                    <tr>
                        {/* Lateral approximants */}
                        <td class="tg-0lax lat-ap">Lateral approximant</td>
                        <td class="tg-0lax no-pad impossible"></td>
                        <td class="tg-0lax no-pad impossible"></td>
                        <td class="tg-0lax no-pad no-right-border"></td>
                        <td class="tg-0lax no-pad no-right-border">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='l'
                                    name='V_alveolar_lateral_approximant'
                                    visible={consonants[names.V_ALVEOLAR_LATERAL_APPROXIMANT]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='ɭ'
                                    name='V_retroflex_lateral_approximant'
                                    visible={consonants[names.V_RETROFLEX_LATERAL_APPROXIMANT]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='ʎ'
                                    name='V_palatal_lateral_approximant'
                                    visible={consonants[names.V_PALATAL_LATERAL_APPROXIMANT]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='ʟ'
                                    name='V_velar_lateral_approximant'
                                    visible={consonants[names.V_VELAR_LATERAL_APPROXIMANT]}
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad impossible"></td>
                        <td class="tg-0lax no-pad impossible"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}