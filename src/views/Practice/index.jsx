import { useState } from 'react';
import Python from '../../components/Python';
import Typography from '@mui/material/Typography';
import VowelChart from '../../components/IPAChart/VowelChart';
import UserVowelTester from '../../components/UserVowelTester';
import CalibrationModal from '../../components/CalibrationModal';

export default function Practice() {
    const [userVowels, setUserVowels] = useState([]);

    return (
        <>
            <CalibrationModal />
            <div id="plot-container" />
            {/* <Python /> */}
            <div className="page-text">
                <Typography variant="h1">Practice Your Pronunciation</Typography>
                <UserVowelTester setVowelValue={setUserVowels} />
                <VowelChart extras={userVowels} />
            </div>
        </>
    );
};
