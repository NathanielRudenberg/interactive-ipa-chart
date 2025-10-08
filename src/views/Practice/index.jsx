import { useState } from 'react';
import Python from '../../components/Python';
import VowelChart from '../../components/IPAChart/VowelChart';
import UserVowelTester from '../../components/UserVowelTester';
import Button from '@mui/material/Button';
import CalibrationModal from '../../components/CalibrationModal';

export default function Practice() {
    const [userVowels, setUserVowels] = useState([]);

    return (
        <>
            <CalibrationModal />
            <div id="plot-container" />
            {/* <Python /> */}
            <div className="page-text">
                <h1>Practice Your Pronunciation</h1>
                <UserVowelTester setVowelValue={setUserVowels} />
                <VowelChart extras={userVowels} />
            </div>
        </>
    );
};
