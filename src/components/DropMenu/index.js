import React from 'react';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';

function DropMenu(props) {
    return (
        <Menu
            // elevation={0}
            getContentAnchorEl={null}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            {...props}
        />
    );
}

const styles = {
    paper: {
        border: '1px solid #d3d4d5',
    },
}

export default withStyles(styles.paper)(DropMenu);