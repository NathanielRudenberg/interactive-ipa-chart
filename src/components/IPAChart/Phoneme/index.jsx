import React from 'react';
import audio from '../../../services/audio';

export default function Phoneme({name, symbol, language, empty, impossible, visible, phonemes}) {
    let playSound = () => {
        if (!empty && !impossible) {
            audio.playConsonant(name, language);
        }
    };

    let className = 'cons';
    if (empty || !visible) className = className.concat(' empty');
    if (impossible) className = className.concat(' impossible');
    
    console.log("Specific phonemes", phonemes)

    if (!visible) {
        return (<><div className={className}></div></>)
    }

    let phoneticSymbol;
    
    if (phonemes?.length == 1) {
        phoneticSymbol = phonemes[0].symbol;
    } else {
        phoneticSymbol = symbol;
    }

    return (
        <>
            <div className={className} onClick={playSound}>{phoneticSymbol}</div>
        </>
    )
}