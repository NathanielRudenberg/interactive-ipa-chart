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
            symbol,
            empty,
            impossible,
            visible
        } = this.props;

        let className = 'cons';
        if (empty || !visible) className = className.concat(' empty');
        if (impossible) className = className.concat(' impossible');

        if (!visible) {
            return (<><div className={className}></div></>)
        }

        return (
            <>
                <div className={className} onClick={this.playSound}>{symbol}</div>
            </>
        )
    }
}