import React from 'react';
import Vowel from './Vowel';
import './vowels.scss';

export default function VowelChart() {
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

                <Vowel name="close_front_unrounded_vowel" className="close_front_unrounded_vowel vowel">i</Vowel>
                <Vowel name="close_front_rounded_vowel" className="close_front_rounded_vowel vowel">y</Vowel>
                <Vowel name="near-close_near-front_unrounded_vowel" className="near-close_near-front_unrounded_vowel vowel">ɪ</Vowel>
                <Vowel name="near-close_near-front_rounded_vowel" className="near-close_near-front_rounded_vowel vowel">ʏ</Vowel>
                <Vowel name="close-mid_front_unrounded_vowel" className="close-mid_front_unrounded_vowel vowel">e</Vowel>
                <Vowel name="close-mid_front_rounded_vowel" className="close-mid_front_rounded_vowel vowel">ø</Vowel>
                <Vowel name="open-mid_front_unrounded_vowel" className="open-mid_front_unrounded_vowel vowel">ɛ</Vowel>
                <Vowel name="open-mid_front_rounded_vowel" className="open-mid_front_rounded_vowel vowel">œ</Vowel>
                <Vowel name="near-open_front_unrounded_vowel" className="near-open_front_unrounded_vowel vowel">æ</Vowel>
                <Vowel name="open_front_unrounded_vowel" className="open_front_unrounded_vowel vowel">a</Vowel>
                <Vowel name="open_front_rounded_vowel" className="open_front_rounded_vowel vowel">ɶ</Vowel>
                
                <Vowel name="close-mid_central_unrounded_vowel" className="close-mid_central_unrounded_vowel vowel">ɘ</Vowel>
                <Vowel name="close-mid_central_rounded_vowel" className="close-mid_central_rounded_vowel vowel">ɵ</Vowel>
                <Vowel name="mid-central_vowel" className="mid-central_vowel vowel">ə</Vowel>
                <Vowel name="open-mid_central_unrounded_vowel" className="open-mid_central_unrounded_vowel vowel">ɜ</Vowel>
                <Vowel name="open-mid_central_rounded_vowel" className="open-mid_central_rounded_vowel vowel">ɞ</Vowel>
                <Vowel name="near-open_central_unrounded_vowel" className="near-open_central_unrounded_vowel vowel">ɐ</Vowel>
                <Vowel name="open_central_unrounded_vowel" className="open_central_unrounded_vowel vowel">ä</Vowel>

                <Vowel name="close_central_unrounded_vowel" className="close_central_unrounded_vowel vowel">ɨ</Vowel>
                <Vowel name="close_central_rounded_vowel" className="close_central_rounded_vowel vowel">ʉ</Vowel>
                <Vowel name="near-close_near-back_rounded_vowel" className="near-close_near-back_rounded_vowel vowel">ʊ</Vowel>
                <Vowel name="close_back_unrounded_vowel" className="close_back_unrounded_vowel vowel">ɯ</Vowel>
                <Vowel name="close_back_rounded_vowel" className="close_back_rounded_vowel vowel">u</Vowel>
                <Vowel name="close-mid_back_unrounded_vowel" className="close-mid_back_unrounded_vowel vowel">ɤ</Vowel>
                <Vowel name="close-mid_back_rounded_vowel" className="close-mid_back_rounded_vowel vowel">o</Vowel>
                <Vowel name="open-mid_back_unrounded_vowel" className="open-mid_back_unrounded_vowel vowel">ʌ</Vowel>
                <Vowel name="open-mid_back_rounded_vowel" className="open-mid_back_rounded_vowel vowel">ɔ</Vowel>
                <Vowel name="open_back_unrounded_vowel" className="open_back_unrounded_vowel vowel">ɑ</Vowel>
                <Vowel name="open_back_rounded_vowel" className="open_back_rounded_vowel vowel">ɒ</Vowel>
            </div>
        </div>
    )
}