import React from 'react';
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
            </div>
        </div>
    )
}