import React from 'react';
import Consonant from './Consonant';
import './consonants.scss';

export default function ConsonantChart() {
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
                        <td class="tg-0lax">Plosive</td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='p'
                                    name='VL_bilabial_plosive'
                                />
                                <Consonant
                                    symbol='b'
                                    name='V_bilabial_plosive'
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
                                />
                                <Consonant
                                    symbol='d'
                                    name='V_alveolar_plosive'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='ʈ'
                                    name='VL_retroflex_plosive'
                                />
                                <Consonant
                                    symbol='ɖ'
                                    name='V_retroflex_plosive'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='c'
                                    name='VL_palatal_plosive'
                                />
                                <Consonant
                                    symbol='ɟ'
                                    name='V_palatal_plosive'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='k'
                                    name='VL_velar_plosive'
                                />
                                <Consonant
                                    symbol='g'
                                    name='V_velar_plosive'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='q'
                                    name='VL_uvular_plosive'
                                />
                                <Consonant
                                    symbol='ɢ'
                                    name='V_uvular_plosive'
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
                                />
                                <Consonant empty impossible />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">Nasal</td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='m'
                                    name='V_bilabial_nasal'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='ɱ'
                                    name='V_labiodental_nasal'
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
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='ɲ'
                                    name='V_palatal_nasal'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='ŋ'
                                    name='V_velar_nasal'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='ɴ'
                                    name='V_uvular_nasal'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad impossible"></td>
                        <td class="tg-0lax no-pad impossible"></td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">Trill</td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='ʙ'
                                    name='V_bilabial_trill'
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
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad impossible"></td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">Tap / flap</td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='ⱱ'
                                    name='V_labiodental_flap'
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
                        <td class="tg-0lax">Fricative</td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='ɸ'
                                    name='VL_bilabial_fricative'
                                />
                                <Consonant
                                    symbol='β'
                                    name='V_bilabial_fricative'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='f'
                                    name='VL_labiodental_fricative'
                                />
                                <Consonant
                                    symbol='v'
                                    name='V_labiodental_fricative'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='θ'
                                    name='VL_dental_fricative'
                                />
                                <Consonant
                                    symbol='ð'
                                    name='V_dental_fricative'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='s'
                                    name='VL_alveolar_fricative'
                                />
                                <Consonant
                                    symbol='z'
                                    name='V_alveolar_fricative'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='ʃ'
                                    name='VL_postalveolar_fricative'
                                />
                                <Consonant
                                    symbol='ʒ'
                                    name='V_postalveolar_fricative'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='ʂ'
                                    name='VL_retroflex_fricative'
                                />
                                <Consonant
                                    symbol='ʐ'
                                    name='V_retroflex_fricative'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='ç'
                                    name='VL_palatal_fricative'
                                />
                                <Consonant
                                    symbol='ʝ'
                                    name='V_palatal_fricative'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='x'
                                    name='VL_velar_fricative'
                                />
                                <Consonant
                                    symbol='ɣ'
                                    name='V_velar_fricative'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='χ'
                                    name='VL_uvular_fricative'
                                />
                                <Consonant
                                    symbol='ʁ'
                                    name='V_uvular_fricative'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='ħ'
                                    name='VL_pharyngeal_fricative'
                                />
                                <Consonant
                                    symbol='ʕ'
                                    name='V_pharyngeal_fricative'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='h'
                                    name='VL_glottal_fricative'
                                />
                                <Consonant
                                    symbol='ɦ'
                                    name='V_glottal_fricative'
                                />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">Lateral fricative</td>
                        <td class="tg-0lax no-pad impossible"></td>
                        <td class="tg-0lax no-pad impossible"></td>
                        <td class="tg-0lax no-pad no-right-border"></td>
                        <td class="tg-0lax no-pad no-right-border">
                            <div class="cons-wrapper">
                                <Consonant
                                    symbol='ɬ'
                                    name='VL_alveolar_lateral_fricative'
                                />
                                <Consonant
                                    symbol='ɮ'
                                    name='V_alveolar_lateral_fricative'
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
                        <td class="tg-0lax">Approximant</td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='ʋ'
                                    name='V_labiodental_approximant'
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
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='j'
                                    name='V_palatal_approximant'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='ɰ'
                                    name='V_velar_approximant'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad impossible"></td>
                    </tr>
                    <tr>
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
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='ʎ'
                                    name='V_palatal_lateral_approximant'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Consonant empty />
                                <Consonant
                                    symbol='ʟ'
                                    name='V_velar_lateral_approximant'
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