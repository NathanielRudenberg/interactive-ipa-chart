import React, { useState, useEffect } from 'react';
import { ReactMediaRecorder } from 'react-media-recorder';
import { Pyodide } from '../../services/pyodide';
import calibrationScriptUrl from '../../services/user_vowelspace.py?url';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile } from '@ffmpeg/util';
import coreURL from '@ffmpeg/core?url';
import wasmURL from '@ffmpeg/core/wasm?url';
import AudioRecorder from './AudioRecorder';

async function storeFilesInPyodide(recordings) {
    const pyodide = Pyodide.getInstance();
    try {
        for (const name in recordings) {
            const fileData = await recordings[name].wavBlob.arrayBuffer();
            pyodide.storeFile(`/audio/practiceCalibration/${name}.wav`, new Uint8Array(fileData));
        }
    } catch (Error) {
        console.error('Error storing recordings in Pyodide:', Error);
    }
}

async function calibrationScript() {
    const code = await (await fetch(calibrationScriptUrl)).text();
    return code;
}

async function calibrateVowels() {
    const pyodide = Pyodide.getInstance();
    try {
        const pythonCode = await calibrationScript();
        await pyodide.run(pythonCode);
    } catch (Error) {
        console.error('Error running calibration script in Pyodide:', Error);
    }
}

export default function VowelCalibrator() {
    const [recordings, setRecordings] = useState({});
    const [ffmpeg, setFfmpeg] = useState(null);
    const [ffmpegLoaded, setFfmpegLoaded] = useState(false);
    const [pyodideReady, setPyodideReady] = useState(false);

    useEffect(() => {
        const pyodide = Pyodide.getInstance();
        pyodide.setReady(setPyodideReady);

        const loadFfmpeg = async () => {
            const ffmpeg = new FFmpeg();
            ffmpeg.on('log', ({ message }) => {
                // console.log(message)
            });

            try {
                console.log('Loading ffmpeg...');
                await ffmpeg.load({ coreURL, wasmURL });
                setFfmpeg(ffmpeg);
                setFfmpegLoaded(true);
                console.log('ffmpeg loaded');
            } catch (error) {
                console.error('Could not load ffmpeg:', error);
            }
        }
        loadFfmpeg();
    }, [])

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
                    onClick={() => {
                        storeFilesInPyodide(recordings).then(() => {
                            calibrateVowels().then(() => {
                                // console.log('Finished calibration.');
                            })
                        }).catch((error) => {
                            console.error('Could not finish storeFilesInPyodide', error);
                        })
                    }}
                    disabled={!pyodideReady || !ffmpegLoaded}
                >
                    {pyodideReady && ffmpegLoaded ? "Calibrate" : "Loading..."}
                </button>
            </p>
        </div >
    );
}
