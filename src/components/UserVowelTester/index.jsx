
import React, { useState } from 'react';
import { ReactMediaRecorder } from 'react-media-recorder';
import pythonCodeUrl from '../../services/get_user_vowel_position.py?url';
import { fetchFile } from '@ffmpeg/util';
import { useFFmpeg } from '../../hooks/useFFmpeg';
import { usePyodide } from '../../hooks/usePyodide';
import AudioRecorder from '../AudioRecorder';
import { Button } from '@mui/material';

async function getCode() {
    const code = await (await fetch(pythonCodeUrl)).text();
    return code;
}

export default function UserVowelTester({ setVowelValue }) {
    const [isRunning, setIsRunning] = useState(false);
    const { ffmpeg, isFFmpegReady } = useFFmpeg();
    const { pyodide, isPyodideReady } = usePyodide();

    const analyzeSound = async (wavBlob) => {
        try {
            // Store audio files in pyodide's virtual filesystem
            const fileData = await wavBlob.arrayBuffer();
            pyodide.mkDir('/audio/userVowels');
            pyodide.storeFile(`/audio/userVowels/vowel.wav`, new Uint8Array(fileData));

            // Load and run the calibration script
            setIsRunning(true);
            const pythonCode = await getCode();
            const jsonStringResult = await pyodide.run(pythonCode);

            // Check if we got a valid string before parsing
            if (!jsonStringResult) {
                throw new Error("Python script returned no result.");
            }

            const results = JSON.parse(jsonStringResult);
            console.log('User\'s formants:', results);

            const extraVowel = { formantValues: results };
            setVowelValue([extraVowel])

        } catch (Error) {
            console.error('Analysis failed:', Error);
        } finally {
            setIsRunning(false);
        }
    }

    const handleStop = async (blobUrl, blob) => {
        try {
            const recordingName = `recording_${Date.now()}`;
            const inputFileName = `${recordingName}.webm`;
            const outputFileName = `${recordingName}.wav`;

            await ffmpeg.writeFile(inputFileName, await fetchFile(blob));
            await ffmpeg.exec(['-i', inputFileName, '-ac', '1', '-ar', '16000', outputFileName]);

            const data = await ffmpeg.readFile(outputFileName);

            const wavBlob = new Blob([data.buffer], { type: 'audio/wav' });
            const wavUrl = URL.createObjectURL(wavBlob);

            analyzeSound(wavBlob)
        } catch (error) {
            console.error('Error processing recording:', error);
        }
    };

    return (
        <div>
            <p> Now, let's practice nailing those vowels!&nbsp; </p>
            <ReactMediaRecorder
                audio
                onStop={handleStop}
                render={props => <AudioRecorder {...props} isDisabled={!isPyodideReady || !isFFmpegReady || isRunning} />}
            />
        </div >
    );
}
