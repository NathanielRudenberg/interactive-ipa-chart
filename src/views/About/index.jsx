import React, { Component } from 'react';
import Typography from '@mui/material/Typography';

export default class About extends Component {
    render() {
        return (
            <div className="page-text">
                <Typography variant="h1" component="h1">About Like A Native</Typography>
                <Typography variant="h4">Learning a new language means mastering new sounds. But how?</Typography>
                <Typography variant="body1">
                    Like A Native is the result of a personal frustration: I was learning a language and was struggling endlessly with difficult sounds. I found myself wishing someone could tell me exactly how to shape my mouth and tongue. Since I couldn't find the interactive, language-specific IPA charts I needed, I decided to build my own.
                </Typography>
                <Typography variant="body1">&nbsp;</Typography>
                <Typography variant="body1">
                    To that end, Like A Native provides customizable charts that automatically switch data to display the consonants and vowels used in your target language, featuring audio recordings for each phoneme to help you become accustomed to the sounds.
                </Typography>
            </div>
        );
    }
};
