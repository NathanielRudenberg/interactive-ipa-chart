import React, { Component } from 'react';
import audio from '../../../../services/audio';

export default class Consonant extends Component {
    playSound = () => {
        if (!this.props.empty && !this.props.impossible) {
            audio.playConsonant(this.props.name, this.props.language);
        }
    };

    render() {
        const {
            empty,
            impossible,
            visible,
            phonemes
        } = this.props;

        let className = 'cons';
        if (empty || !visible) className = className.concat(' empty');
        if (impossible) className = className.concat(' impossible');

        console.log("Specific phonemes", phonemes)

        if (!visible) {
            return (<><div className={className}></div></>)
        }

        let symbol;
        
        if (phonemes?.length == 1) {
            symbol = phonemes[0].symbol;
        } else {
            symbol = this.props.symbol;
        }

        return (
            <>
                <div className={className} onClick={this.playSound}>{symbol}</div>
            </>
        )
    }
}