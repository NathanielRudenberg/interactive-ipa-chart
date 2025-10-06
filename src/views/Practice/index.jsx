import React from 'react';
import Python from '../../components/Python';
import VowelChart from '../../components/IPAChart/VowelChart';
import VowelCalibrator from '../../components/VowelCalibrator';

export default function Practice() {
    return (
        <>
            <p></p>
            <div id="plot-container" />
            <Python />
            <div className="page-text">
                <h1>Practice Your Pronunciation</h1>
                <p>
                    Vowel quality is one of the biggest influences on what your
                    accent sounds like. Use this page to practice your vowel sounds
                    and get feedback on how close you are to the target.
                    <br />
                    To calibrate the tool, first record yourself saying each of the
                    four corner vowels: <strong>i</strong> (as in <em>see</em>),&nbsp;
                    <strong>u</strong> (as in <em>blue</em>),&nbsp;
                    <strong>a</strong> (as in <em>father</em>), and&nbsp;
                    <strong>æ</strong> (as in <em>cat</em>).
                </p>
                <VowelCalibrator />
                <VowelChart />
            </div>
        </>
    );
};
