import React, { createContext, useState } from 'react';
const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(null);

    const updateLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    };

    const clearSelectedLanguage = () => {
        setLanguage(null);
    };

    return (
        <LanguageContext.Provider value={{ language, updateLanguage, clearSelectedLanguage }}>
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