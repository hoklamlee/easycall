import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CarImage from '../assets/list-page-audi-car@2x.png';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
});

export default function MUICard(props) {
    const classes = useStyles();

    return (<div>
        {props.cards.map(o => (
            <Card className={classes.card} onClick={o.onClick}>
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
                            {o.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {o.content}
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
        ))}
    </div>

    );
}
