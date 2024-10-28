import React, { Component } from 'react';
import audio from '../../../../services/audio';

export default class Consonant extends Component {
    playSound = () => {
        if (!this.props.empty && !this.props.impossible) {
            audio.playConsonant(this.props.name);
        }
    };

    render() {
        const {
            symbol,
            empty,
            impossible,
            visible
        } = this.props;

        let className = 'cons';
        if (empty || !visible) className = className.concat(' empty');
        if (impossible) className = className.concat(' impossible');

        if (!visible) {
            return (<><div class={className}></div></>)
        }

        return (
            <>
                <div class={className} onClick={this.playSound}>{symbol}</div>
            </>
        )
    }
}