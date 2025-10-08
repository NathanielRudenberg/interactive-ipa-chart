import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const INTRO_STEP = 'intro';
const RECORD_STEP = 'record';
const CALIBRATE_STEP = 'calibrate';
const DONE_STEP = 'done';

const CalibrationModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(INTRO_STEP);

    const goToRecord = () => {
        setCurrentStep(RECORD_STEP);
    };

    const goToIntro = () => {
        setCurrentStep(INTRO_STEP);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.default',
        borderRadius: '8px',
        // border: '2px solid #000',
        boxShadow: 24,
        textAlign: 'center',
        p: 4,
    };

    const introStep = (
        <Box sx={style}>
            <Typography variant="h2">Your Vocal Signature</Typography>
            <Typography variant="body1">
                To get started, we need to learn the unique sound of your voice.
                This quick process maps your accent.
                On the next screen, record yourself saying the following four vowel sounds:
            </Typography>
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
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
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
        </Box>
    );

    const recordStep = (
        <Box sx={style}>
            <Typography variant='h2'>Palbo</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
                    onClick={() => { }}
                    sx={{ marginTop: '8px' }}
                    disableRipple
                    endIcon={<ArrowForwardIcon />}
                >
                    Next
                </Button>
            </Box>
        </Box>
    );


    let modalContent;
    switch (currentStep) {
        case INTRO_STEP:
            modalContent = introStep;
            break;
        case RECORD_STEP:
            modalContent = recordStep;
            break;
    }

    const handleOpen = () => setIsOpen(true)
    const handleClose = () => setIsOpen(false)
    return (
        <>
            <Button variant={"contained"} onClick={handleOpen}>Pablo</Button>
            <Modal
                open={isOpen}
                onClose={handleClose}
            >
                {modalContent}
            </Modal>
        </>
    );
};

export default CalibrationModal;
