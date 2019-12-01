import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Router, Route, Link } from 'react-router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../../store/Order';
import config from 'react-global-configuration';

import MaterialTable from 'material-table';
import { Paper, Grid } from '@material-ui/core';
import RightBottomButton from '../../components/RightBottomButton';
import MaterialUIButton from '../../components/MaterialUIButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPlus, faTrash, faPen, faTools, faHeart } from '@fortawesome/free-solid-svg-icons'
import { history } from '../../helpers/history';
import '/NotificationPage.css'

export default class NotificationPage extends React.Component {
    constructor() {
        super(props)

    }

    render() {

        return (
            <div>
                <Grid container direction="column" alignContent='center'>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                    </Grid>

                </Grid>
            </div>
        )
    }
}

//function mapStateToProps(state) {
//    const { loading, error, items } = state.order;
//    return {
//        loading, error, items
//    };
//}

//const connectedOrderTab = connect(
//    mapStateToProps,
//    dispatch => bindActionCreators(actionCreators, dispatch)
//)(OrderTab);
//export { connectedOrderTab as OrderTab };






