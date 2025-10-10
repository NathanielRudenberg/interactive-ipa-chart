import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/styles';

const StyledToggleButton = styled(ToggleButton)({
    textTransform: 'none',
    fontSize: '1rem',
});

export default function SpeakerTypeSelector({ type, setType }) {
    const handleCategory = (event, newCategory) => setType(newCategory)

    return (
        <ToggleButtonGroup
            value={type}
            exclusive
            onChange={handleCategory}
            ari-label='speaker category'
            sx={{ margin: '16px auto' }}
        >
            <StyledToggleButton value='F' aria-label='female'>
                Female
            </StyledToggleButton>
            <StyledToggleButton value='M' aria-label='male'>
                Male
            </StyledToggleButton>
            {/* <StyledToggleButton value='C' aria-label='child'> */}
            {/*     Child */}
            {/* </StyledToggleButton> */}
        </ToggleButtonGroup>
    )
}
