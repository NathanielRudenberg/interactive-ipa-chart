import React from 'react';
import Vowel from './Vowel';
import './vowels.scss';

export default function VowelChart() {
    return (
        <div class='consonant-chart'>
            <table class="tg">
                <tbody>
                    <tr>
                        <td class="top tg-0lax"></td>
                        <td class="top tg-0lax">Front</td>
                        <td class="top tg-0lax"></td>
                        <td class="top tg-0lax"></td>
                        <td class="top tg-0lax">Central</td>
                        <td class="top tg-0lax"></td>
                        <td class="top tg-0lax"></td>
                        <td class="top tg-0lax">Back</td>
                        <td class="top tg-0lax"></td>
                        <td class="top tg-0lax"></td>
                        <td class="top tg-0lax"></td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">Close</td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Vowel
                                    symbol='p'
                                    name='VL_bilabial_plosive'
                                />
                                <Vowel
                                    symbol='b'
                                    name='V_bilabial_plosive'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad no-right-border"></td>
                        <td class="tg-0lax no-pad no-right-border">
                            <div class="cons-wrapper">
                                <Vowel
                                    symbol='t'
                                    name='VL_alveolar_plosive'
                                />
                                <Vowel
                                    symbol='d'
                                    name='V_alveolar_plosive'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Vowel
                                    symbol='ʈ'
                                    name='VL_retroflex_plosive'
                                />
                                <Vowel
                                    symbol='ɖ'
                                    name='V_retroflex_plosive'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Vowel
                                    symbol='c'
                                    name='VL_palatal_plosive'
                                />
                                <Vowel
                                    symbol='ɟ'
                                    name='V_palatal_plosive'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Vowel
                                    symbol='k'
                                    name='VL_velar_plosive'
                                />
                                <Vowel
                                    symbol='g'
                                    name='V_velar_plosive'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Vowel
                                    symbol='q'
                                    name='VL_uvular_plosive'
                                />
                                <Vowel
                                    symbol='ɢ'
                                    name='V_uvular_plosive'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Vowel empty />
                                <Vowel empty impossible />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">Near-close</td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Vowel empty />
                                <Vowel
                                    symbol='m'
                                    name='V_bilabial_nasal'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Vowel empty />
                                <Vowel
                                    symbol='ɱ'
                                    name='V_labiodental_nasal'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad no-right-border"></td>
                        <td class="tg-0lax no-pad no-right-border">
                            <div class="cons-wrapper">
                                <Vowel empty />
                                <Vowel
                                    symbol='n'
                                    name='V_alveolar_nasal'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Vowel empty />
                                <Vowel
                                    symbol='ɳ'
                                    name='V_retroflex_nasal'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Vowel empty />
                                <Vowel
                                    symbol='ɲ'
                                    name='V_palatal_nasal'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Vowel empty />
                                <Vowel
                                    symbol='ŋ'
                                    name='V_velar_nasal'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Vowel empty />
                                <Vowel
                                    symbol='ɴ'
                                    name='V_uvular_nasal'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad impossible"></td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">Close-mid</td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Vowel empty />
                                <Vowel
                                    symbol='ʙ'
                                    name='V_bilabial_trill'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad no-right-border"></td>
                        <td class="tg-0lax no-pad no-right-border">
                            <div class="cons-wrapper">
                                <Vowel empty />
                                <Vowel
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
                                <Vowel empty />
                                <Vowel
                                    symbol='ʀ'
                                    name='V_uvular_trill'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">Mid</td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Vowel empty />
                                <Vowel
                                    symbol='ⱱ'
                                    name='V_labiodental_flap'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad no-right-border"></td>
                        <td class="tg-0lax no-pad no-right-border">
                            <div class="cons-wrapper">
                                <Vowel empty />
                                <Vowel
                                    symbol='ɾ'
                                    name='V_alveolar_tap'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Vowel empty />
                                <Vowel
                                    symbol='ɽ'
                                    name='V_retroflex_flap'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad impossible"></td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad"></td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">Open-mid</td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Vowel
                                    symbol='ɸ'
                                    name='V_bilabial_fricative'
                                />
                                <Vowel
                                    symbol='β'
                                    name='VL_bilabial_fricative'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Vowel
                                    symbol='f'
                                    name='VL_labiodental_fricative'
                                />
                                <Vowel
                                    symbol='v'
                                    name='V_labiodental_fricative'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Vowel
                                    symbol='θ'
                                    name='VL_dental_fricative'
                                />
                                <Vowel
                                    symbol='ð'
                                    name='V_dental_fricative'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Vowel
                                    symbol='s'
                                    name='VL_alveolar_fricative'
                                />
                                <Vowel
                                    symbol='z'
                                    name='V_alveolar_fricative'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Vowel
                                    symbol='ʃ'
                                    name='VL_postalveolar_fricative'
                                />
                                <Vowel
                                    symbol='ʒ'
                                    name='V_postalveolar_fricative'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Vowel
                                    symbol='ʂ'
                                    name='VL_retroflex_fricative'
                                />
                                <Vowel
                                    symbol='ʐ'
                                    name='V_retroflex_fricative'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Vowel
                                    symbol='ç'
                                    name='VL_palatal_fricative'
                                />
                                <Vowel
                                    symbol='ʝ'
                                    name='V_palatal_fricative'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Vowel
                                    symbol='x'
                                    name='VL_velar_fricative'
                                />
                                <Vowel
                                    symbol='ɣ'
                                    name='V_velar_fricative'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Vowel
                                    symbol='χ'
                                    name='VL_uvular_fricative'
                                />
                                <Vowel
                                    symbol='ʁ'
                                    name='V_uvular_fricative'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Vowel
                                    symbol='ħ'
                                    name='VL_pharyngeal_fricative'
                                />
                                <Vowel
                                    symbol='ʕ'
                                    name='V_pharyngeal_fricative'
                                />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">Near-open</td>
                        <td class="tg-0lax no-pad impossible"></td>
                        <td class="tg-0lax no-pad impossible"></td>
                        <td class="tg-0lax no-pad no-right-border"></td>
                        <td class="tg-0lax no-pad no-right-border">
                            <div class="cons-wrapper">
                                <Vowel
                                    symbol='ɬ'
                                    name='VL_alveolar_lateral_fricative'
                                />
                                <Vowel
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
                    </tr>
                    <tr>
                        <td class="tg-0lax">Open</td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Vowel empty />
                                <Vowel
                                    symbol='ʋ'
                                    name='V_labiodental_approximant'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad no-right-border"></td>
                        <td class="tg-0lax no-pad no-right-border">
                            <div class="cons-wrapper">
                                <Vowel empty />
                                <Vowel
                                    symbol='ɹ'
                                    name='V_alveolar_approximant'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Vowel empty />
                                <Vowel
                                    symbol='ɻ'
                                    name='V_retroflex_approximant'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Vowel empty />
                                <Vowel
                                    symbol='j'
                                    name='V_palatal_approximant'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <Vowel empty />
                                <Vowel
                                    symbol='ɰ'
                                    name='V_velar_approximant'
                                />
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}