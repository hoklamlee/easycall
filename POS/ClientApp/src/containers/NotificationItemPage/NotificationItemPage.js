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
import MUICard from '../../components/MUICard';
class NotificationItemPage extends React.Component {
    constructor(props) {
        super(props);
    }

    handleCreate() {
        history.push("/createnotificationitem");
    }

    render() {
        const cards = [
            {
                title: 'Where is my car?',
                content: ' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
                onClick: (() => history.push('/editnotification/1'))
            }
        ]
        return (
            <div>
                <MUICard cards={cards}/>
                <RightBottomButton style={{ marginBottom: '6vh' }} label="Create" handleClick={this.handleCreate}><FontAwesomeIcon icon={faPlus} /></RightBottomButton>
            </div>
        )
    }

}

function mapStateToProps(state) {
    const { loading, error, items } = state.order;
    return {
        loading, error, items
    };
}

const connectedNotificationItemPage = connect(
    mapStateToProps,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(NotificationItemPage);
export { connectedNotificationItemPage as NotificationItemPage };






