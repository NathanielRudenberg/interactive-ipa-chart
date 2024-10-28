import React, { Component } from 'react';
import audio from '../../../../services/audio';

export default class Vowel extends Component {
    playSound = () => {
        if (!this.props.empty && !this.props.impossible) {
            audio.playVowel(this.props.name, this.props.language);
        }
    };

    render() {
        let {children, className} = this.props;

        return (
            <>
                <div class={className}>
                    <div className="symbol-container">
                        <div onClick={children ? this.playSound : null} className="symbol">
                            {children}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}