import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Divider from '@mui/material/Divider';
import { ThreeCircles, TailSpin, Grid, Audio } from 'react-loader-spinner';
import { ReactMediaRecorder } from 'react-media-recorder';
import AudioRecorder from '../AudioRecorder/';
import pythonCodeUrl from '../../services/user_vowelspace.py?url';
import { fetchFile } from '@ffmpeg/util';
import { useFFmpeg } from '../../hooks/useFFmpeg'
import { usePyodide } from '../../hooks/usePyodide';

const INTRO_STEP = 'intro';
const RECORD_STEP = 'record';
const CALIBRATE_STEP = 'calibrate';
const DONE_STEP = 'done';
const REQUIRED_RECORDINGS = 4;
const STEP_CHANGE_DURATION = 200;

const CalibrationModal = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [currentStep, setCurrentStep] = useState(INTRO_STEP);
    const [recordings, setRecordings] = useState({});
    const [isRunning, setIsRunning] = useState(false);
    const [contentOpacity, setContentOpacity] = useState(1);
    const [speakerCategory, setSpeakerCategory] = useState(null);
    const [error, setError] = useState(null);
    const { ffmpeg, isFFmpegReady } = useFFmpeg();
    const { pyodide, isPyodideReady } = usePyodide();

    const changeStep = (nextStep) => {
        setContentOpacity(0);
        setTimeout(() => {
            setCurrentStep(nextStep);
            setContentOpacity(1);
        }, STEP_CHANGE_DURATION); // This duration should match the CSS transition
    };

    const goToRecord = () => changeStep(RECORD_STEP);

    const goToIntro = () => changeStep(INTRO_STEP);

    const goToCalibration = () => changeStep(CALIBRATE_STEP);

    const done = () => changeStep(DONE_STEP)

    async function getCode() {
        const code = await (await fetch(pythonCodeUrl)).text();
        return code;
    }

    const handleCalibrate = async () => {
        try {
            // Store audio files in pyodide's virtual filesystem
            for (const name in recordings) {
                const fileData = await recordings[name].wavBlob.arrayBuffer();
                pyodide.storeFile(`/audio/practiceCalibration/${name}.wav`, new Uint8Array(fileData));
            }

            // Load and run the calibration script
            setIsRunning(true);
            const pythonCode = await getCode();
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

            setRecordings(prevRecordings => ({
                ...prevRecordings,
                [recordingName]: {
                    url: wavUrl,
                    blob: blob,
                    wavBlob: wavBlob,
                }
            }));
        } catch (error) {
            console.error('Error processing recording:', error);
        }
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        display: 'flex',
        flexDirection: 'column',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 400,
        overflowY: 'auto',
        bgcolor: 'background.default',
        borderRadius: '8px',
        // border: '2px solid #000',
        boxShadow: 24,
        textAlign: 'center',
        p: 4,
    };

    const introStep = (
        <>
            <Typography variant="body1" >
                To get started, we need to learn the unique sound of your voice.
                This quick process maps your accent.
                On the next screen, record yourself saying the following four vowel sounds:
            </Typography >
            <Typography variant='body1'>
                <strong>i</strong> (as in <em>see</em>)
            </Typography>
            <Typography variant='body1'>
                <strong>u</strong> (as in <em>blue</em>),&nbsp;
            </Typography>
            <Typography variant='body1'>
                <strong>a</strong> (as in <em>father</em>), and&nbsp;
            </Typography>
            <Typography variant='body1'>
                <strong>æ</strong> (as in <em>cat</em>).
            </Typography>
            <Alert severity='info'>
                Tip: Record in a quiet room, and hold each sound for 1-2 seconds.
            </Alert>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'auto' }}>
                <Button
                    onClick={goToRecord}
                    disableRipple
                    sx={{ marginTop: '8px' }}
                    variant="contained"
                    color="secondary"
                    endIcon={<ArrowForwardIcon />}
                >
                    Next
                </Button>
            </Box>
        </>
    );

    const numberOfRecordings = Object.keys(recordings).length;
    const progressDots = (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
            {[...Array(REQUIRED_RECORDINGS)].map((_, index) => (
                <div
                    key={`progress-dot-${index}`}
                    style={{
                        width: '15px',
                        height: '15px',
                        borderRadius: '50%',
                        backgroundColor: index < numberOfRecordings ? '#4caf50' : '#f44366',
                        transition: 'background-color 0.1s ease',
                        margin: '0 5px'
                    }}
                >
                </div>
            ))}
        </div>
    )

    const recordStep = (
        <>
            <Typography variant='h5'>Select Your Voice Profile</Typography>
            <SpeakerTypeSelector type={speakerCategory} setType={setSpeakerCategory} />
            {speakerCategory && <>
                <ReactMediaRecorder
                    audio
                    onStop={handleStop}
                    render={props => <AudioRecorder {...props} recordings={recordings} />}
                />
                {progressDots}
            </>
            }
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 'auto' }}>
                <Button
                    color="secondary"
                    variant="contained"
                    onClick={goToIntro}
                    sx={{ marginTop: '8px' }}
                    disableRipple
                    startIcon={<ArrowBackIcon />}
                >
                    Back
                </Button>
                <Button
                    color="secondary"
                    variant="contained"
                    onClick={() => {
                        handleCalibrate()
                        goToCalibration()
                    }}
                    sx={{ marginTop: '8px' }}
                    disableRipple
                    endIcon={<ArrowForwardIcon />}
                    disabled={Object.keys(recordings).length < REQUIRED_RECORDINGS || !speakerCategory}
                >
                    Next
                </Button>
            </Box>
        </>
    );

    const calibrateStep = isRunning ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Grid color="#CBD4C2" />
        </div>
    ) : (
        <>
            <Typography>Ready!</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'auto' }}>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={done}
                    sx={{ marginTop: '8px' }}
                    disableRipple
                    // endIcon={<ArrowForwardIcon />}
                    disabled={Object.keys(recordings).length < 4 || !isPyodideReady || !isFFmpegReady || isRunning}
                >
                    Done
                </Button>
            </Box>
        </>
    )

    let modalContent;
    switch (currentStep) {
        case INTRO_STEP:
            modalContent = introStep;
            break;
        case RECORD_STEP:
            modalContent = recordStep;
            break;
        case CALIBRATE_STEP:
            modalContent = calibrateStep;
            break;
        default:
            modalContent = introStep;
    }

    const handleOpen = () => changeStep(INTRO_STEP)
    return (
        <>
            <Button sx={{ marginTop: '20px' }} variant={"contained"} onClick={handleOpen}>Recalibrate</Button>
            <Modal
                open={currentStep !== DONE_STEP}
            >
                <Box sx={style}>
                    <Typography variant="h2">Your Vocal Signature</Typography>
                    <Divider sx={{ margin: '16px 0' }} />
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        opacity: contentOpacity,
                        transition: `opacity ${STEP_CHANGE_DURATION}ms ease-in-out`,
                        // height: '100%'
                        flexGrow: 1
                    }}>
                        {modalContent}
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default CalibrationModal;
