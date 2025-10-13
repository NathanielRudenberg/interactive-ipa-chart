import React, { createContext, useContext, useEffect, useState } from 'react';
import { featureFlagsConfig } from '../../services/featureFlags.js';

const FeatureFlagContext = createContext();
const LOCAL_STORAGE_KEY = 'featureFlagsState';

export const FeatureFlagProvider = ({ children }) => {
    // const [flags, setFlags] = useState(featureFlagsConfig);
    const [flags, setFlags] = useState(() => {
        try {
            const storedFlags = window.localStorage.getItem(LOCAL_STORAGE_KEY);

            if (storedFlags) {
                return JSON.parse(storedFlags);
            }
        } catch (error) {
            console.error('Error reading from localStorage:', error);
        }

        return featureFlagsConfig;
    });

    useEffect(() => {
        try {
            window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(flags));
        } catch (error) {
            console.error("Error writing to localStorage:", error);
        }
    }, [flags]);

    const toggleFlag = (key) => {
        setFlags((prevFlags) => ({
            ...prevFlags,
            [key]: {
                ...prevFlags[key],
                enabled: !prevFlags[key].enabled,
            },
        }));
    };

    return (
        <FeatureFlagContext.Provider value={{ flags, toggleFlag }}>
            {children}
        </FeatureFlagContext.Provider>
    );
};

export const useFeatureFlags = () => useContext(FeatureFlagContext);
