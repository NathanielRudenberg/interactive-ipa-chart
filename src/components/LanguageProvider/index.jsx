import React, { createContext, useState, useEffect } from 'react';
import { apiClient } from '../../services/api';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(null);
    const [selectedLanguageMenuItem, setSelectedLanguageMenuItem] = useState(null);
    const [dropdownButton, setDropdownButton] = useState(null);
    const [formantValues, setFormantValues] = useState({});

    useEffect(() => {
        const formants = apiClient.get(`/vowel-formants/${language || 'default'}`);
        formants.then(data => {
            setFormantValues(data);
            // console.log('Formant Values:', data);
        })
    }, [language])

    const updateLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    };

    const clearSelectedLanguage = () => {
        setLanguage(null);
    };

    const handleClickDropdown = event => {
        setDropdownButton(event.currentTarget);
    }

    const handleCloseDropdown = () => {
        setDropdownButton(null);
    }

    const handleSelectLanguage = (item, value) => {
        setSelectedLanguageMenuItem(item);
        updateLanguage(value);
        handleCloseDropdown();
    }

    const handleClear = () => {
        setSelectedLanguageMenuItem(null);
        clearSelectedLanguage();
    }

    return (
        <LanguageContext.Provider
            value={{
                language, formantValues, dropdownButton, selectedLanguageMenuItem,
                handleClickDropdown, handleCloseDropdown, handleSelectLanguage,
                handleClear
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

function useLanguage() {
    const context = React.useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}

export { LanguageProvider, useLanguage };
