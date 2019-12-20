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
        const classes = makeStyles({
            card: {
                maxWidth: 345,
            },
        });
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
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging
                                            across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                    <Button size="small" color="primary">
                                        Learn More
                                    </Button>
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


