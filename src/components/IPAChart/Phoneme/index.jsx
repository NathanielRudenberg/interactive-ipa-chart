import React from 'react';
import audio from '../../../services/audio';

export default function Phoneme({name, symbol, language, empty, impossible, visible}) {
    let playSound = () => {
        if (!empty && !impossible) {
            audio.play(name, language);
        }
    };

    let className = 'cons';
    if (empty || !visible) className = className.concat(' empty');
    if (impossible) className = className.concat(' impossible');

    if (!visible) {
        return (<><div className={className}></div></>)
    }

    return (
        <>
            <div className={className} onClick={playSound}>{symbol}</div>
        </>
    )
}