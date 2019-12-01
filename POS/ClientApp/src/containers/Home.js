import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import MUICard from '../components/MUICard';

const Home = props => (
    <div style={{marginTop:"5vh"}}>
        <Grid container alignContent="center" direction="column" >
            <Grid item>
                <MUICard />

            </Grid>
        </Grid>
    </div>
);

export default connect()(Home);
