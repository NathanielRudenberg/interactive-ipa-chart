import Button from '@mui/material/Button';
import MicIcon from '@mui/icons-material/Mic';
import StopIcon from '@mui/icons-material/Stop';

const AudioRecorder = ({ status, startRecording, stopRecording, isDisabled, mediaBlobUrl, sx }) => {
    let Icon;
    if (status === "recording") {
        Icon = StopIcon;
    } else if (status === "acquiring_media") {
        Icon = StopIcon;
    } else {
        Icon = MicIcon;
    }

    const onClick = status === "recording" ? stopRecording : startRecording;

    return (
        <div>
            <Button
                sx={sx}
                onClick={onClick}
                variant="contained"
                color="secondary"
                disableRipple
                disabled={isDisabled}
            >
                <Icon />
            </Button>
        </div>
    )
}

export default AudioRecorder;
