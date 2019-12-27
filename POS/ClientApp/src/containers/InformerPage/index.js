// React & Redux
import React from 'react';
import {history} from '../../helpers/history';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../store/Order';
// Material-ui
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CarImage from '../../assets/list-page-audi-car@2x.png'


export class Index extends React.Component {

    constructor(props) {
        super(props);

    }

    handleCreate() {
        history.push("/createnotificationitem");
    }

    render() {
        const classes = makeStyles(theme=>({
            root: {
                flexGrow: 1,
            },
            paper: {
                height: 140,
                width: 100,
            },
            control: {
                padding: theme.spacing(2),
            },
            card: {
                maxWidth: 345,
            },

        }));
        const cards = [
            {
                title: 'EC1688',
                content: '需要通知車主嗎？你可選擇下列其中一種。',
                onClick: (() => history.push('/editnotification/1'))
            }
        ]

        return (
            <div style={{marginTop: "5vh"}}>
                <Grid container alignContent="center" direction="column">
                    <Grid item>
                        <div>

                            <Card className={classes.card}>

                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image={CarImage}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            EC1688
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Please select one of the way to push notification
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>

                                     <Grid container className={classes.root} spacing={2} justify="space-evenly" alignItems="center">
                                         <Grid key="1" item>
                                             <img src="https://img.icons8.com/carbon-copy/80/000000/whatsapp.png"/>
                                             <Paper className={classes.paper} />
                                         </Grid>
                                         <Grid key="2" item>
                                             <img src="https://img.icons8.com/android/60/000000/sms.png"/>
                                             <Paper className={classes.paper} />
                                         </Grid>
                                         <Grid key="3" item>
                                             <img src="https://img.icons8.com/dotty/60/000000/outgoing-call.png"/>
                                             <Paper className={classes.paper} />
                                         </Grid>
                                     </Grid>

                                </CardActions>
                            </Card>

                        </div>
                    </Grid>
                </Grid>

            </div>

        )
    }

}

function mapStateToProps(state) {
    const {loading, error, items} = state.order;
    return {
        loading, error, items
    };
}

const connectedNotificationItemPage = connect(
    mapStateToProps,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Index);
export {connectedNotificationItemPage as NotificationItemPage};


