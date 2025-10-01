import React, { Component, useState } from 'react';
import audio from '../../../../services/audio';

export default function Vowel({empty, impossible, name, language, phonemes, defaultSymbol, children, className, style}) {
    const [showList, setShowList] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null)

    let playSound = () => {
        if (!empty && !impossible) {
            audio.play(name, language);
        }
    };

    let handleShowList = event => {
        setShowList(true);
        setAnchorEl(event.currentTarget);
    };

    let handleHideList = event => {
        setShowList(false);
        setAnchorEl(null);
    };

    return (
        <>
            <div className={className} style={style}>
                <div className="symbol-container">
                    <div onClick={children ? playSound : null} className="symbol">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}