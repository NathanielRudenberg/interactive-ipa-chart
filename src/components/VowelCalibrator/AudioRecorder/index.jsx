const AudioRecorder = ({ status, startRecording, stopRecording, recordings, mediaBlobUrl }) => {
    const recordingButton = status === "recording" ? (
        <button onClick={stopRecording}>
            Stop Recording
        </button>
    ) : (
        <button onClick={startRecording}>
            Start Recording
        </button>
    );
    return (
        <div>
            <p>{status}</p>
            {recordingButton}

            <h2>Saved Recordings:</h2>
            {Object.entries(recordings).map(([name, recording]) => (
                <div key={name}>
                    <p>{name}</p>
                    <audio src={recording.url} controls />
                </div>
            ))}
        </div>
    )
}

export default AudioRecorder;