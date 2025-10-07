import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Menu from '@mui/material/Menu';
import DropMenuItem from '../DropMenuItem';;
import './language-selector.scss';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import CloseIcon from '@mui/icons-material/Close';
import { useLanguage } from '../LanguageProvider';

export default function LanguageSelector() {
    const {
        dropdownButton, selectedLanguageMenuItem, handleClickDropdown,
        handleCloseDropdown, handleSelectLanguage, handleClear
    } = useLanguage();

    const buttonEndIcon = dropdownButton ? <ExpandLessRoundedIcon /> : <ExpandMoreRoundedIcon />;

    return (
        <>
            <ButtonGroup color="primary" variant={'contained'} disableElevation aria-label="outlined primary button group">
                <Button
                    disableRipple
                    aria-controls="language-variant-menu"
                    aria-haspopup="true"
                    onClick={handleClickDropdown}
                    endIcon={buttonEndIcon}
                    sx={{ borderRadius: 0 }}
                >
                    {selectedLanguageMenuItem || 'Select a Language'}
                </Button>

                {selectedLanguageMenuItem && <Button
                    color="secondary"
                    onClick={handleClear}
                    sx={{ borderRadius: 0 }}
                >
                    <CloseIcon />
                </Button>}
            </ButtonGroup>

            <Menu
                id="language-variant-menu"
                anchorEl={dropdownButton}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                keepMounted
                open={Boolean(dropdownButton)}
                onClose={handleCloseDropdown}
            >
                {/* <DropMenuItem onSelect={handleSelectLanguage} value="french">French</DropMenuItem> */}
                {/* <DropMenuItem onSelect={handleSelectLanguage} value="general-american-english">General American English</DropMenuItem> */}
                {/* <DropMenuItem onSelect={handleSelectLanguage} value="haitiancreole">Haitian Creole</DropMenuItem> */}
                {/* <DropMenuItem onSelect={handleSelectLanguage} value="icelandic">Icelandic</DropMenuItem> */}
                <DropMenuItem onSelect={handleSelectLanguage} value="spanish">Spanish</DropMenuItem>
                {/* <DropMenuItem onSelect={handleSelectLanguage} value="korean">Korean</DropMenuItem> */}
                {/* <DropMenuItem onSelect={handleSelectLanguage} value="test">TEST</DropMenuItem> */}
            </Menu>
        </>
    );
}
