import React, { createContext, useState } from 'react';
const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(null);
    const [selectedLanguageMenuItem, setSelectedLanguageMenuItem] = useState(null);
    const [dropdownButton, setDropdownButton] = useState(null);

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
                language, dropdownButton, selectedLanguageMenuItem,
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