import React, { useState } from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { makeStyles } from '@material-ui/core/styles';
import store from "../data/store";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },  
    FormControl: {
        width: '60ch',
    },
}));

const RicipeList = () => {
    const classes = useStyles();
    const renderObject = () => {(
        Object.entries(store.getState()).map(([key, value], i)=> {
            return(
                <div key={key}>
                    {value}
                </div>
            )
        })
    )}
    return (
        <div className={classes.root}>
            {renderObject()}
        </div>
    );
}

export default RicipeList;