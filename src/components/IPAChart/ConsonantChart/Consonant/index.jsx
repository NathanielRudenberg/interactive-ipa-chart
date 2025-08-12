import React, { useState, useRef } from 'react';
import Phoneme from '../../Phoneme';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import audio from '../../../../services/audio';

export default function Consonant({empty, impossible, name, language, phonemes, defaultSymbol}) {
    const [showList, setShowList] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null)

    let playSound = () => {
        if (!empty && !impossible) {
            audio.playConsonant(name, language);
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

    let visible = phonemes?.length > 0;
    let className = 'cons';
    if (empty || !visible) className = className.concat(' empty');
    if (impossible) className = className.concat(' impossible');

    if (!visible) {
        return (<><div className={className}></div></>)
    }

    let symbol;
    let instances;
    
    if (phonemes?.length == 1) {
        return (
            <Phoneme language={language}
                symbol={phonemes[0].symbol}
                name={name}
                visible={visible}
            />
        )
    } else {
        if (phonemes?.length > 1) {
            className = className.concat(' multiple');
        }
        instances = phonemes.map(phoneme => (
            <Phoneme language={language}
                symbol={phoneme.symbol}
                name={name}
                visible={visible}
            />
        ));
        symbol = defaultSymbol;
    }

    return (
        <>
            <div
                className={className}
                onClick={playSound}
                onMouseEnter={handleShowList}
                onMouseLeave={handleHideList}
            >
                {symbol}
                <Popper
                    open={showList}
                    placement="top"
                    anchorEl={anchorEl}
                    modifiers={[
                        {
                        },
                    ]}
                >
                    <Box sx={{ border: 0, bgcolor: 'background.paper', display: 'flex', flexDirection: 'row', boxShadow: 4, }}>
                        {instances}
                    </Box>
                </Popper>
            </div>
        </>
    )
}