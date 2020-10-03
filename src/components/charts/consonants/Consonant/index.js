import React, { Component } from 'react';
import audio from '../../../../services/audio';

export default class Consonant extends Component {
    constructor(props) {
        super(props);
    }

    playSound = () => {
        if (!this.props.empty && !this.props.impossible) {
            audio.playSound(this.props.name);
        }
    };

    render() {
        const {
            symbol,
        } = this.props;

        let className = 'cons';
        if (this.props.empty) className = className.concat(' empty');
        if (this.props.impossible) className = className.concat(' impossible');

        return (
            <>
                <div class={className} onClick={this.playSound}>{symbol}</div>
            </>
        )
    }
}