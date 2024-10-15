import React from 'react';
import Vowel from './Vowel';
import phonemeSpecs from '../../../services/phonemeSpecs';
import './vowels.scss';

export default function VowelChart(props) {
    let languageName = props.language ? props.language : 'default';
    console.log('language chart:', languageName);
    let vowelSpec = phonemeSpecs[languageName].vowels;
    console.log('vowel spec:', vowelSpec);
    return (
        <div class="vowel-section">
            <div class="vowel-boat-container">
                <div id="vowel-boat" class="vowel-boat-section" />
                <div id="top-left" class="vowel-boat-section" />
                <div id="top-right" class="vowel-boat-section" />
                <div id="mid-left" class="vowel-boat-section" />
                <div id="mid-right" class="vowel-boat-section" />
                <div id="bottom-left" class="vowel-boat-section" />
                <div id="bottom-right" class="vowel-boat-section" />

                {vowelSpec['close_front_unrounded_vowel'] && <Vowel name="close_front_unrounded_vowel" className="close_front_unrounded_vowel vowel">i</Vowel>}
                {vowelSpec['close_front_rounded_vowel'] && <Vowel name="close_front_rounded_vowel" className="close_front_rounded_vowel vowel">y</Vowel>}
                {vowelSpec['near-close_near-front_unrounded_vowel'] && <Vowel name="near-close_near-front_unrounded_vowel" className="near-close_near-front_unrounded_vowel vowel">ɪ</Vowel>}
                {vowelSpec['near-close_near-front_rounded_vowel'] && <Vowel name="near-close_near-front_rounded_vowel" className="near-close_near-front_rounded_vowel vowel">ʏ</Vowel>}
                {vowelSpec['close-mid_front_unrounded_vowel'] && <Vowel name="close-mid_front_unrounded_vowel" className="close-mid_front_unrounded_vowel vowel">e</Vowel>}
                {vowelSpec['close-mid_front_rounded_vowel'] && <Vowel name="close-mid_front_rounded_vowel" className="close-mid_front_rounded_vowel vowel">ø</Vowel>}
                {vowelSpec['open-mid_front_unrounded_vowel'] && <Vowel name="open-mid_front_unrounded_vowel" className="open-mid_front_unrounded_vowel vowel">ɛ</Vowel>}
                {vowelSpec['open-mid_front_rounded_vowel'] && <Vowel name="open-mid_front_rounded_vowel" className="open-mid_front_rounded_vowel vowel">œ</Vowel>}
                {vowelSpec['near-open_front_unrounded_vowel'] && <Vowel name="near-open_front_unrounded_vowel" className="near-open_front_unrounded_vowel vowel">æ</Vowel>}
                {vowelSpec['open_front_unrounded_vowel'] && <Vowel name="open_front_unrounded_vowel" className="open_front_unrounded_vowel vowel">a</Vowel>}
                {vowelSpec['open_front_rounded_vowel'] && <Vowel name="open_front_rounded_vowel" className="open_front_rounded_vowel vowel">ɶ</Vowel>}

                {vowelSpec['close-mid_central_unrounded_vowel'] && <Vowel name="close-mid_central_unrounded_vowel" className="close-mid_central_unrounded_vowel vowel">ɘ</Vowel>}
                {vowelSpec['close-mid_central_rounded_vowel'] && <Vowel name="close-mid_central_rounded_vowel" className="close-mid_central_rounded_vowel vowel">ɵ</Vowel>}
                {vowelSpec['mid-central_vowel'] && <Vowel name="mid-central_vowel" className="mid-central_vowel vowel">ə</Vowel>}
                {vowelSpec['open-mid_central_unrounded_vowel'] && <Vowel name="open-mid_central_unrounded_vowel" className="open-mid_central_unrounded_vowel vowel">ɜ</Vowel>}
                {vowelSpec['open-mid_central_rounded_vowel'] && <Vowel name="open-mid_central_rounded_vowel" className="open-mid_central_rounded_vowel vowel">ɞ</Vowel>}
                {vowelSpec['near-open_central_unrounded_vowel'] && <Vowel name="near-open_central_unrounded_vowel" className="near-open_central_unrounded_vowel vowel">ɐ</Vowel>}
                {vowelSpec['open_central_unrounded_vowel'] && <Vowel name="open_central_unrounded_vowel" className="open_central_unrounded_vowel vowel">ä</Vowel>}

                {vowelSpec['close_central_unrounded_vowel'] && <Vowel name="close_central_unrounded_vowel" className="close_central_unrounded_vowel vowel">ɨ</Vowel>}
                {vowelSpec['close_central_rounded_vowel'] && <Vowel name="close_central_rounded_vowel" className="close_central_rounded_vowel vowel">ʉ</Vowel>}
                {vowelSpec['near-close_near-back_rounded_vowel'] && <Vowel name="near-close_near-back_rounded_vowel" className="near-close_near-back_rounded_vowel vowel">ʊ</Vowel>}
                {vowelSpec['close_back_unrounded_vowel'] && <Vowel name="close_back_unrounded_vowel" className="close_back_unrounded_vowel vowel">ɯ</Vowel>}
                {vowelSpec['close_back_rounded_vowel'] && <Vowel name="close_back_rounded_vowel" className="close_back_rounded_vowel vowel">u</Vowel>}
                {vowelSpec['close-mid_back_unrounded_vowel'] && <Vowel name="close-mid_back_unrounded_vowel" className="close-mid_back_unrounded_vowel vowel">ɤ</Vowel>}
                {vowelSpec['close-mid_back_rounded_vowel'] && <Vowel name="close-mid_back_rounded_vowel" className="close-mid_back_rounded_vowel vowel">o</Vowel>}
                {vowelSpec['open-mid_back_unrounded_vowel'] && <Vowel name="open-mid_back_unrounded_vowel" className="open-mid_back_unrounded_vowel vowel">ʌ</Vowel>}
                {vowelSpec['open-mid_back_rounded_vowel'] && <Vowel name="open-mid_back_rounded_vowel" className="open-mid_back_rounded_vowel vowel">ɔ</Vowel>}
                {vowelSpec['open_back_unrounded_vowel'] && <Vowel name="open_back_unrounded_vowel" className="open_back_unrounded_vowel vowel">ɑ</Vowel>}
                {vowelSpec['open_back_rounded_vowel'] && <Vowel name="open_back_rounded_vowel" className="open_back_rounded_vowel vowel">ɒ</Vowel>}
            </div>
        </div>
    )
}