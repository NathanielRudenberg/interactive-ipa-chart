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
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="cons">p</div>
                                <div class="cons">b</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad no-right-border"></td>
                        <td class="tg-0lax no-pad no-right-border">
                            <div class="cons-wrapper">
                                <div class="cons">t</div>
                                <div class="cons">d</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="cons">ʈ</div>
                                <div class="cons">ɖ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="cons">c</div>
                                <div class="cons">ɟ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="cons">k</div>
                                <div class="cons">g</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="cons">q</div>
                                <div class="cons">ɢ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="empty cons"></div>
                                <div class="empty cons impossible"></div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="cons">ʔ</div>
                                <div class="empty cons impossible"></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">Nasal</td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="empty cons"></div>
                                <div class="cons">m</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="empty cons"></div>
                                <div class="cons">ɱ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad no-right-border"></td>
                        <td class="tg-0lax no-pad no-right-border">
                            <div class="cons-wrapper">
                                <div class="empty cons"></div>
                                <div class="cons">n</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="empty cons"></div>
                                <div class="cons">ɳ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="empty cons"></div>
                                <div class="cons">ɲ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="empty cons"></div>
                                <div class="cons">ŋ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="empty cons"></div>
                                <div class="cons">ɴ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad impossible"></td>
                        <td class="tg-0lax no-pad impossible"></td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">Trill</td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="empty cons"></div>
                                <div class="cons">ʙ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad no-right-border"></td>
                        <td class="tg-0lax no-pad no-right-border">
                            <div class="cons-wrapper">
                                <div class="empty cons"></div>
                                <div class="cons">r</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad impossible"></td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="empty cons"></div>
                                <div class="cons">ʀ</div>
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
                                <div class="empty cons"></div>
                                <div class="cons">ⱱ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad no-right-border"></td>
                        <td class="tg-0lax no-pad no-right-border">
                            <div class="cons-wrapper">
                                <div class="empty cons"></div>
                                <div class="cons">ɾ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="empty cons"></div>
                                <div class="cons">ɽ</div>
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
                                <div class="cons">ɸ</div>
                                <div class="cons">β</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="cons">f</div>
                                <div class="cons">v</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="cons">θ</div>
                                <div class="cons">ð</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="cons">s</div>
                                <div class="cons">z</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="cons">ʃ</div>
                                <div class="cons">ʒ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="cons">ʂ</div>
                                <div class="cons">ʐ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="cons">ç</div>
                                <div class="cons">ʝ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="cons">x</div>
                                <div class="cons">ɣ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="cons">χ</div>
                                <div class="cons">ʁ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="cons">ħ</div>
                                <div class="cons">ʕ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="cons">h</div>
                                <div class="cons">ɦ</div>
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
                                <div class="cons">ɬ</div>
                                <div class="cons">ɮ</div>
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
                                <div class="empty cons"></div>
                                <div class="cons">ʋ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad no-right-border"></td>
                        <td class="tg-0lax no-pad no-right-border">
                            <div class="cons-wrapper">
                                <div class="empty cons"></div>
                                <div class="cons">ɹ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="empty cons"></div>
                                <div class="cons">ɻ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="empty cons"></div>
                                <div class="cons">j</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="empty cons"></div>
                                <div class="cons">ɰ</div>
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
                                <div class="empty cons"></div>
                                <div class="cons">l</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad"></td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="empty cons"></div>
                                <div class="cons">ɭ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="empty cons"></div>
                                <div class="cons">ʎ</div>
                            </div>
                        </td>
                        <td class="tg-0lax no-pad">
                            <div class="cons-wrapper">
                                <div class="empty cons"></div>
                                <div class="cons">ʟ</div>
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