import Button from '@mui/material/Button';
import MicIcon from '@mui/icons-material/Mic';
import StopIcon from '@mui/icons-material/Stop';

const AudioRecorder = ({ status, startRecording, stopRecording, recordings, mediaBlobUrl }) => {
    const recordingButton = status === "recording" ? (
        <Button
            onClick={stopRecording}
            variant="contained"
            color="secondary"
            disableRipple
        >
            <StopIcon />
        </Button>
    ) : (
        <Button
            onClick={startRecording}
            variant="contained"
            color="secondary"
            disableRipple
        >
            <MicIcon />
        </Button>
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