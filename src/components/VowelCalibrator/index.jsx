import React, { useState } from 'react';
import { ReactMediaRecorder } from 'react-media-recorder';
import calibrationScriptUrl from '../../services/user_vowelspace.py?url';
import { fetchFile } from '@ffmpeg/util';
import { useFFmpeg } from '../../hooks/useFfmpeg';
import { usePyodide } from '../../hooks/usePyodide';
import AudioRecorder from './AudioRecorder';
import { Button } from '@mui/material';

async function calibrationScript() {
    const code = await (await fetch(calibrationScriptUrl)).text();
    return code;
}

export default function VowelCalibrator() {
    const [recordings, setRecordings] = useState({});
    const [isRunning, setIsRunning] = useState(false);
    const {ffmpeg, isFFmpegReady} = useFFmpeg();
    const {pyodide, isPyodideReady} = usePyodide();

    const handleCalibrate = async () => {
        try {
            // Store audio files in pyodide's virtual filesystem
            for (const name in recordings) {
                const fileData = await recordings[name].wavBlob.arrayBuffer();
                pyodide.storeFile(`/audio/practiceCalibration/${name}.wav`, new Uint8Array(fileData));
            }

            // Load and run the calibration script
            setIsRunning(true);
            const pythonCode = await calibrationScript();
            const jsonStringResult = await pyodide.run(pythonCode);
            
            // Check if we got a valid string before parsing
            if (!jsonStringResult) {
                throw new Error("Python script returned no result.");
            }

            const results = JSON.parse(jsonStringResult);
            console.log('Calibration results:', results);
            
            if (results && results.stats) {
                pyodide.setGlobal("SPEAKER_STATS", results.stats);
                console.log('Speaker stats saved to global variable "SPEAKER_STATS"');
            }

        } catch (Error) {
            console.error('Calibration failed:', Error);
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

            const newRecordings = {
                ...recordings,
                [recordingName]: {
                    url: wavUrl,
                    blob: blob,
                    wavBlob: wavBlob,
                },
            };
            setRecordings(newRecordings);
        } catch (error) {
            console.error('Error processing recording:', error);
        }
    };

    return (
        <div>
            <ReactMediaRecorder
                audio
                onStop={handleStop}
                render={props => <AudioRecorder {...props} recordings={recordings} />}
            />
            <p> After recording your vowels, load them in:&nbsp;
                <Button
                    onClick={handleCalibrate}
                    disabled={!isPyodideReady || !isFFmpegReady || isRunning || Object.keys(recordings).length < 4}
                    variant="contained"
                    disableRipple
                >
                    {isPyodideReady && isFFmpegReady && !isRunning ? "Calibrate" : "Loading..."}
                </Button>
            </p>
        </div >
    );
}
