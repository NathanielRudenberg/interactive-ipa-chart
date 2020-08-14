import React from 'react';
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
                        <td class="tg-0lax">p b</td>
                        <td class="tg-0lax"></td>
                        <td class="tg-0lax no-right-border"></td>
                        <td class="tg-0lax no-right-border">t d</td>
                        <td class="tg-0lax"></td>
                        <td class="tg-0lax">ʈ ɖ</td>
                        <td class="tg-0lax">c ɟ</td>
                        <td class="tg-0lax">k g</td>
                        <td class="tg-0lax">q ɢ</td>
                        <td class="tg-0lax"></td>
                        <td class="tg-0lax">ʔ</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">Nasal</td>
                        <td class="tg-0lax">m</td>
                        <td class="tg-0lax">ɱ</td>
                        <td class="tg-0lax no-right-border"></td>
                        <td class="tg-0lax no-right-border">n</td>
                        <td class="tg-0lax"></td>
                        <td class="tg-0lax">ɳ</td>
                        <td class="tg-0lax">ɲ</td>
                        <td class="tg-0lax">ŋ</td>
                        <td class="tg-0lax">ɴ</td>
                        <td class="tg-0lax impossible"></td>
                        <td class="tg-0lax impossible"></td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">Trill</td>
                        <td class="tg-0lax">ʙ</td>
                        <td class="tg-0lax"></td>
                        <td class="tg-0lax no-right-border"></td>
                        <td class="tg-0lax no-right-border">r</td>
                        <td class="tg-0lax"></td>
                        <td class="tg-0lax"></td>
                        <td class="tg-0lax"></td>
                        <td class="tg-0lax impossible"></td>
                        <td class="tg-0lax">ʀ</td>
                        <td class="tg-0lax"></td>
                        <td class="tg-0lax impossible"></td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">Tap / flap</td>
                        <td class="tg-0lax"></td>
                        <td class="tg-0lax">ⱱ</td>
                        <td class="tg-0lax no-right-border"></td>
                        <td class="tg-0lax no-right-border">ɾ</td>
                        <td class="tg-0lax"></td>
                        <td class="tg-0lax">ɽ</td>
                        <td class="tg-0lax"></td>
                        <td class="tg-0lax impossible"></td>
                        <td class="tg-0lax"></td>
                        <td class="tg-0lax"></td>
                        <td class="tg-0lax impossible"></td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">Fricative</td>
                        <td class="tg-0lax">ɸ β</td>
                        <td class="tg-0lax">f v</td>
                        <td class="tg-0lax">θ ð</td>
                        <td class="tg-0lax">s z</td>
                        <td class="tg-0lax">ʃ ʒ</td>
                        <td class="tg-0lax">ʂ ʐ</td>
                        <td class="tg-0lax">ç ʝ</td>
                        <td class="tg-0lax">x ɣ</td>
                        <td class="tg-0lax">χ ʁ</td>
                        <td class="tg-0lax">ħ ʕ</td>
                        <td class="tg-0lax">h ɦ</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">Lateral fricative</td>
                        <td class="tg-0lax impossible"></td>
                        <td class="tg-0lax impossible"></td>
                        <td class="tg-0lax no-right-border"></td>
                        <td class="tg-0lax no-right-border">ɬ ɮ</td>
                        <td class="tg-0lax"></td>
                        <td class="tg-0lax"></td>
                        <td class="tg-0lax"></td>
                        <td class="tg-0lax"></td>
                        <td class="tg-0lax"></td>
                        <td class="tg-0lax impossible"></td>
                        <td class="tg-0lax impossible"></td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">Approximant</td>
                        <td class="tg-0lax"></td>
                        <td class="tg-0lax">ʋ</td>
                        <td class="tg-0lax no-right-border"></td>
                        <td class="tg-0lax no-right-border">ɹ</td>
                        <td class="tg-0lax"></td>
                        <td class="tg-0lax">ɻ</td>
                        <td class="tg-0lax">j</td>
                        <td class="tg-0lax">ɰ</td>
                        <td class="tg-0lax"></td>
                        <td class="tg-0lax"></td>
                        <td class="tg-0lax impossible"></td>
                    </tr>
                    <tr>
                        <td class="tg-0lax lat-ap">Lateral approximant</td>
                        <td class="tg-0lax impossible"></td>
                        <td class="tg-0lax impossible"></td>
                        <td class="tg-0lax no-right-border"></td>
                        <td class="tg-0lax no-right-border">l</td>
                        <td class="tg-0lax"></td>
                        <td class="tg-0lax">ɭ</td>
                        <td class="tg-0lax">ʎ</td>
                        <td class="tg-0lax">ʟ</td>
                        <td class="tg-0lax"></td>
                        <td class="tg-0lax impossible"></td>
                        <td class="tg-0lax impossible"></td>
                    </tr>
                </tbody>
            </table></div>
    )
}