import React, { Component } from 'react';
import audio from '../../../../services/audio';

export default class Consonant extends Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     this.audio.load();
    //     console.log('loading sound');
    // }

    playSound = () => {
        console.log('playing sound');
        audio.playSound(this.props.name);
    };

    // stopSound = () => {
    //     this.setState({
    //         playing: Sound.status.STOPPED,
    //     })
    // }

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