import React, { useState } from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import '../index.css'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },  
    FormControl: {
        width: '60ch',
    },
}));

const SearchBar = () => {
    const classes = useStyles();
    const [searchQuery, setQuery] = useState('');
    return (
        <div className="search">
            <FormControl  variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Search recipe</InputLabel>
                <OutlinedInput
                className={classes.FormControl}
                    id="outlined-adornment-amount"
                    value={searchQuery}
                    onChange={e => setQuery(e.target.value)}
                    /* endAdornment={<InputAdornment position="start">@</InputAdornment>} */
                    labelWidth={100}
                />
            </FormControl>
        </div>
    );
}

export default SearchBar;