import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Menu from '@mui/material/Menu';
import DropMenuItem from '../DropMenuItem';;
import './language-selector.scss';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import CloseIcon from '@mui/icons-material/Close';
import { useLanguage } from '../LanguageProvider';

export default function LanguageSelector() {
    const [langVar, setLangVar] = useState(null);
    const [langVarButton, setLangVarButton] = useState(null);
    const { updateLanguage, clearSelectedLanguage } = useLanguage();

    const handleClickLangVar = event => {
        setLangVarButton(event.currentTarget);
    }

    const handleCloseLangVar = () => {
        setLangVarButton(null);
    }

    const handleSelectLangVar = (item, value) => {
        setLangVar(item);
        updateLanguage(value);
        handleCloseLangVar();
    }

    const handleClear = () => {
        setLangVar(null);
        clearSelectedLanguage();
    }

    return (
        <>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button aria-controls="language-variant-menu" aria-haspopup="true" onClick={handleClickLangVar} endIcon={<ExpandMoreRoundedIcon />}>
                    {langVar || 'Select a Language'}
                </Button>
                {langVar && <Button variant='contained' onClick={handleClear}>
                    <CloseIcon />
                </Button>}
            </ButtonGroup>

            <Menu
                id="language-variant-menu"
                anchorEl={langVarButton}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                keepMounted
                open={Boolean(langVarButton)}
                onClose={handleCloseLangVar}
            >
                {/* <DropMenuItem onSelect={handleSelectLangVar} value="french">French</DropMenuItem> */}
                {/* <DropMenuItem onSelect={handleSelectLangVar} value="general-american-english">General American English</DropMenuItem> */}
                <DropMenuItem onSelect={handleSelectLangVar} value="haitiancreole">Haitian Creole</DropMenuItem>
                <DropMenuItem onSelect={handleSelectLangVar} value="icelandic">Icelandic</DropMenuItem>
                <DropMenuItem onSelect={handleSelectLangVar} value="spanish">Spanish</DropMenuItem>
                <DropMenuItem onSelect={handleSelectLangVar} value="korean">Korean</DropMenuItem>
                {/* <DropMenuItem onSelect={handleSelectLangVar} value="test">TEST</DropMenuItem> */}
            </Menu>
        </>
    );
}