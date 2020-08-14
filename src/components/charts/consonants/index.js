import React from 'react';
import './consonants.scss';

export default function ConsonantChart() {
    return (
        <div class='consonant-chart'>
            <h4>Pulmonic consonants</h4>
            For each pair, the symbol on the right represents the voiced counterpart.
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
                                <div class="voiceless">p</div>
                                <div class="voiced">b</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad no-right-border"></td>
                        <td class="tg-0lax no-pad no-right-border">
                            <div class="cons-wrapper">
                                <div class="voiceless">t</div>
                                <div class="voiced">d</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="voiceless">ʈ</div>
                                <div class="voiced">ɖ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="voiceless">c</div>
                                <div class="voiced">ɟ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="voiceless">k</div>
                                <div class="voiced">g</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="voiceless">q</div>
                                <div class="voiced">ɢ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="voiceless"></div>
                                <div class="voiceless impossible"></div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="voiceless">ʔ</div>
                                <div class="voiced impossible"></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">Nasal</td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="voiceless"></div>
                                <div class="voiced">m</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="voiceless"></div>
                                <div class="voiced">ɱ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad no-right-border"></td>
                        <td class="tg-0lax no-pad no-right-border">
                            <div class="cons-wrapper">
                                <div class="voiceless"></div>
                                <div class="voiced">n</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="voiceless"></div>
                                <div class="voiced">ɳ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="voiceless"></div>
                                <div class="voiced">ɲ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="voiceless"></div>
                                <div class="voiced">ŋ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="voiceless"></div>
                                <div class="voiced">ɴ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad impossible"></td>
                        <td class="tg-0lax no-pad impossible"></td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">Trill</td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="voiceless"></div>
                                <div class="voiced">ʙ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad no-right-border"></td>
                        <td class="tg-0lax no-pad no-right-border">
                            <div class="cons-wrapper">
                                <div class="voiceless"></div>
                                <div class="voiced">r</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad impossible"></td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="voiceless"></div>
                                <div class="voiced">ʀ</div>
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
                                <div class="voiceless"></div>
                                <div class="voiced">ⱱ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad no-right-border"></td>
                        <td class="tg-0lax no-pad no-right-border">
                            <div class="cons-wrapper">
                                <div class="voiceless"></div>
                                <div class="voiced">ɾ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="voiceless"></div>
                                <div class="voiced">ɽ</div>
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
                                <div class="voiceless">ɸ</div>
                                <div class="voiced">β</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="voiceless">f</div>
                                <div class="voiced">v</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="voiceless">θ</div>
                                <div class="voiced">ð</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="voiceless">s</div>
                                <div class="voiced">z</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="voiceless">ʃ</div>
                                <div class="voiced">ʒ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="voiceless">ʂ</div>
                                <div class="voiced">ʐ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="voiceless">ç</div>
                                <div class="voiced">ʝ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="voiceless">x</div>
                                <div class="voiced">ɣ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="voiceless">χ</div>
                                <div class="voiced">ʁ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="voiceless">ħ</div>
                                <div class="voiced">ʕ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="voiceless">h</div>
                                <div class="voiced">ɦ</div>
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
                                <div class="voiceless">ɬ</div>
                                <div class="voiced">ɮ</div>
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
                                <div class="voiceless"></div>
                                <div class="voiced">ʋ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad no-right-border"></td>
                        <td class="tg-0lax no-pad no-right-border">
                            <div class="cons-wrapper">
                                <div class="voiceless"></div>
                                <div class="voiced">ɹ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="voiceless"></div>
                                <div class="voiced">ɻ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="voiceless"></div>
                                <div class="voiced">j</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="voiceless"></div>
                                <div class="voiced">ɰ</div>
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
                                <div class="voiceless"></div>
                                <div class="voiced">l</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="voiceless"></div>
                                <div class="voiced">ɭ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="voiceless"></div>
                                <div class="voiced">ʎ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="voiceless"></div>
                                <div class="voiced">ʟ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad impossible"></td>
                        <td class="tg-0lax no-pad impossible"></td>
                    </tr>
                </tbody>
            </table>
            Shaded areas represent sounds thought to be impossible to produce.
        </div>
    )
}