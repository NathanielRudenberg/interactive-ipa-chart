import React from 'react';
import Vowel from './Vowel';
import './vowels.scss';

export default function VowelChart() {
    return (
            <div id="vowel-container">
                <div id="vowel-boat" />
                <div id="top-left" />
                <div id="top-right" />
                <div id="mid-left" />
                <div id="mid-right" />
                <div id="bottom-left" />
                <div id="bottom-right" />
            </div>
    )
}