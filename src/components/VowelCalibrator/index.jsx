import React, { useState } from 'react';
import { ReactMediaRecorder } from 'react-media-recorder';
import calibrationScriptUrl from '../../services/user_vowelspace.py?url';
import { fetchFile } from '@ffmpeg/util';
import { useFFmpeg } from '../../hooks/useFfmpeg';
import { usePyodide } from '../../hooks/usePyodide';
import AudioRecorder from './AudioRecorder';

async function calibrationScript() {
    const code = await (await fetch(calibrationScriptUrl)).text();
    return code;
}

export default function VowelCalibrator() {
    const [recordings, setRecordings] = useState({});
    const {ffmpeg, isFFmpegReady} = useFFmpeg();
    const {pyodide, isPyodideReady} = usePyodide();

    const handleCalibrate = async () => {
        try {
            for (const name in recordings) {
                const fileData = await recordings[name].wavBlob.arrayBuffer();
                pyodide.storeFile(`/audio/practiceCalibration/${name}.wav`, new Uint8Array(fileData));
            }

            const pythonCode = await calibrationScript();
            await pyodide.run(pythonCode);
        } catch (Error) {
            console.error('Calibration failed:', Error);
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
                <button
                    onClick={handleCalibrate}
                    disabled={!isPyodideReady || !isFFmpegReady}
                >
                    {isPyodideReady && isFFmpegReady ? "Calibrate" : "Loading..."}
                </button>
            </p>
        </div >
    );
}
