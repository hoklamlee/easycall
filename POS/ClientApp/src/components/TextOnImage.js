import React from 'react';
import MaterialTable from 'material-table';
import { Paper } from '@material-ui/core';
import './TextOnImage.css';

export default function TextOnImageBottom(props) {

    const position = props.position != "bottom" && props.position != "top" ? "top" : props.position;

    return (
        <div className="image" style={props.style}>
            <img height="70%" src={props.image} alt="" />
            <div className={position}>{props.text}</div>
        </div>
    )
}