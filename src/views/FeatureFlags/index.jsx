import React from 'react';
import { useFeatureFlags } from '../../components/FeatureFlagContext/';

const FeatureFlagsPage = () => {
    const { flags, toggleFlag } = useFeatureFlags();

    return (
        <div>
            <h1>Feature Flags</h1>
            {Object.entries(flags).map(([key, flag]) => (
                <div key={key} style={{ marginBottom: '10px' }}>
                    <h3>{flag.name}</h3>
                    <p>{flag.description}</p>
                    <label>
                        <input
                            type="checkbox"
                            checked={flag.enabled}
                            onChange={() => toggleFlag(key)}
                        />
                        {flag.enabled ? 'Enabled' : 'Disabled'}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default FeatureFlagsPage;
