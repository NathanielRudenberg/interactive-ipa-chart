import React, { Component } from 'react';
import audio from '../../../../services/audio';

export default class Vowel extends Component {
    playSound = () => {
        if (!this.props.empty && !this.props.impossible) {
            // audio.playSound(this.props.name);
        }
    };

    render() {
        const {
            symbol,
        } = this.props;

        return (
            <>
                <div class={'vowel'} onClick={this.playSound}>{symbol}</div>
            </>
        )
    }
}