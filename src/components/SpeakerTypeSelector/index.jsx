import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/styles';

const StyledToggleButton = styled(ToggleButton)({
    padding: 24,
    textTransform: 'none'
});

export default function SpeakerTypeSelector({ type, setType }) {
    const handleCategory = (event, newCategory) => setType(newCategory)

    return (
        <ToggleButtonGroup
            value={type}
            exclusive
            onChange={handleCategory}
            aira-label='speaker category'
            sx={{ margin: '0 auto', height: 32 }}
        >
            <StyledToggleButton value='F' aria-label='female'>
                <Typography variant='h4'>Female</Typography>
            </StyledToggleButton>
            <StyledToggleButton value='M' aria-label='male'>
                <Typography variant='h4'>Male</Typography>
            </StyledToggleButton>
            {/* <StyledToggleButton value='C' aria-label='child'> */}
            {/*     <Typography variant='h4'>Child</Typography> */}
            {/* </StyledToggleButton> */}
        </ToggleButtonGroup>
    )
}
