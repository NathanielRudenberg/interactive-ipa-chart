import React, { Component } from 'react';
import './about.scss';

export default class About extends Component{
    render() {
        return (
            <div className="App">
                <div className="about-text">
                    <h1>About Like A Native</h1>
                    <h4>Learning a new language means mastering new sounds. But how?</h4>
                    <p>Like A Native is the result of a personal frustration: I was learning a language and was struggling endlessly with difficult sounds. I found myself wishing someone could tell me exactly how to shape my mouth and tongue. Since I couldn't find the interactive, language-specific IPA charts I needed, I decided to build my own.</p>
                    <p>To that end, Like A Native provides customizable charts that automatically switch data to display the consonants and vowels used in your target language and provide audio recordings for each phoneme to help you become accustomed to the sounds.</p>
                </div>
            </div>
          );
    }
};