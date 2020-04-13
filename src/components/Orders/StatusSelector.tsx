import React, {useContext, useEffect, useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useStylesStatusSelector, colors } from './Orders.style';

type StatusSelectorProps = {
    status: string,
    handleChange
}

const StatusSelector:React.FC<StatusSelectorProps> = (props) => {
    const classes = useStylesStatusSelector();
    const colorStart = colors[props.status]['--background-start'];
    const colorEnd = colors[props.status]['--background-end'];
    return (
       
        <Select
        value={props.status}
        onChange={props.handleChange}
        classes={{root: classes.filledOverride}}
        disableUnderline
        //style={colors[props.status]}
        style={{
            background: `linear-gradient(45deg, ${colorStart} 30%, ${colorEnd} 90%)`,
            borderRadius: 10,
            border: 0,
            display: 'block',
            padding: '10px 20px 10px 20px',
            
        }}
        // inputProps= {{
        //     padding: '15px 20px 15px 20px',
        // }}
        >
        <MenuItem value="cancelled">Annulée</MenuItem>
        <MenuItem value="processing">En Cours</MenuItem>
        <MenuItem value="completed">Terminée</MenuItem>
        <MenuItem value="refunded">Remboursée</MenuItem>
        </Select>
    );
}

export default StatusSelector;
