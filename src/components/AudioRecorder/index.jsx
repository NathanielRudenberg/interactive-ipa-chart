import Button from '@mui/material/Button';
import MicIcon from '@mui/icons-material/Mic';
import StopIcon from '@mui/icons-material/Stop';

const AudioRecorder = ({ status, startRecording, stopRecording, recordings, setStatus, mediaBlobUrl }) => {
    let Icon;
    if (status === "recording") {
        Icon = StopIcon;
    } else if (status === "acquiring_media") {
        Icon = StopIcon;
    } else {
        Icon = MicIcon;
    }

    const onClick = status === "recording" ? stopRecording : startRecording;

    const recordingButton = (
        <Button
            onClick={onClick}
            variant="contained"
            color="secondary"
            disableRipple
        >
            <Icon />
        </Button>
    );
    return (
        <div>
            {/* <p>{status}</p> */}
            <Button
                onClick={onClick}
                variant="contained"
                color="secondary"
                disableRipple
            >
                <Icon />
            </Button>
        </div>
    )
}

export default AudioRecorder;
