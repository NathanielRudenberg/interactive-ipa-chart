import React from 'react';
import clsx from 'clsx';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

function DropMenuItem(props) {
    const { classes, className, children, onSelect, ...other } = props;
    return (
        <MenuItem
            className={clsx(classes.root, className)}
            onClick={() => {onSelect(children)}}
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