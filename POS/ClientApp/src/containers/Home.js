import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import RightBottomButton from '../components/RightBottomButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NotificationItemPage } from './NotificationItemPage/NotificationItemPage'
import { faCoffee, faPlus, faTrash, faPen, faTools, faHeart } from '@fortawesome/free-solid-svg-icons'
const Home = props => (
    <div style={{marginTop:"5vh"}}>
        <Grid container alignContent="center" direction="column" >
            <Grid item>
                <NotificationItemPage />
            </Grid>
        </Grid>

    </div>
);

export default connect()(Home);
