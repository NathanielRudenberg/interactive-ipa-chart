import React, {useState} from 'react';
import { ReactMediaRecorder } from 'react-media-recorder';

export default function VowelCalibrator() {
    const [recordings, setRecordings] = useState({});
    const handleStop = (blobUrl, blob) => {
        const recordingName = `recording_${Date.now()}`;
        // Create a new object to avoid direct state mutation
        const newRecordings = {
          ...recordings,
          [recordingName]: {
            url: blobUrl,
            blob: blob,
          },
        };
        setRecordings(newRecordings);
        console.log('Saved recordings:', newRecordings);
      };

    return (
        <div>
            <ReactMediaRecorder
                audio
                onStop={handleStop}
                render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
                    <div>
                        <p>{status}</p>
                        <button onClick={startRecording}>Start Recording</button>
                        <button onClick={stopRecording}>Stop Recording</button>

                        <h2>Saved Recordings:</h2>
                        {Object.entries(recordings).map(([name, recording]) => (
                            <div key={name}>
                                <p>{name}</p>
                                <audio src={recording.url} controls />
                            </div>
                        ))}
                    </div>
                )}
            />
        </div >
    );
}
