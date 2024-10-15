import React from 'react';
import clsx from 'clsx';
import MenuItem from '@mui/material/MenuItem';
import { withStyles } from '@mui/styles';

function DropMenuItem(props) {
    const { classes, className, children, onSelect, value, ...other } = props;
    return (
        <MenuItem
            className={clsx(classes.root, className)}
            onClick={() => {onSelect(children, value)}}
            {...other}
            >
            {children}
        </MenuItem>
    );
}

const styles = {
    // root: {
    //     '&:focus': {
    //         backgroundColor: theme.palette.primary.main,
    //         '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
    //             color: theme.palette.common.white,
    //         },
    //     },
    // },
}

export default withStyles(styles)(DropMenuItem);