import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import MUICard from '../components/MUICard';
import RightBottomButton from '../components/RightBottomButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPlus, faTrash, faPen, faTools, faHeart } from '@fortawesome/free-solid-svg-icons'
const Home = props => (
    <div style={{marginTop:"5vh"}}>
        <Grid container alignContent="center" direction="column" >
            <Grid item>
                <MUICard />

            </Grid>
        </Grid>
        <RightBottomButton style={{marginBottom:'6vh'}} label="Create" handleClick={this.handeCreate}><FontAwesomeIcon icon={faPlus} /></RightBottomButton>

    </div>
);

export default connect()(Home);
