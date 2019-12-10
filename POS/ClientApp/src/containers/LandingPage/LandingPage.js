import React from 'react';
import {Router, Route, Link} from 'react-router';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {actionCreators} from '../../store/User';
import config from 'react-global-configuration';
import logo from '../../assets/loginsign-up-top-photo.png';
import {Grid, Typography} from '@material-ui/core';
import ReactStrappForm from '../../components/ReactStrapForm';
import {width} from '@material-ui/system';
import TextOnImage from '../../components/TextOnImage';
import imageBackgroundTop from '../../assets/bg-frontpage-top.png';
import imageMan from '../../assets/bg-man-owner.png';
import imageCar from '../../assets/bg-car.png';
import imageReporter from '../../assets/bg-man-reporter.png';
import './style.css';
import Tabs from '../../components/Tabs'

import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

import NavigationIcon from '@material-ui/icons/Navigation';
import Icon from '@material-ui/core/Icon';

const colors = ['7732bb', '047cc0', '00884b', 'e3bc13', 'db7c00', 'aa231f'];

class LandingPage extends React.Component {

    constructor(props) {

        super(...props);
        this.state = {
            slideIndex: 0,
            length: 2,
            wrapAround: false,
            animation: undefined,
            underlineHeader: false,
            zoomScale: 1,
            slidesToShow: 1,
            cellAlign: 'left',
            transitionMode: 'scroll',
            heightMode: 'max',
            withoutControls: false
        };
        this.handleImageClick = this.handleImageClick.bind(this);
        this.handleZoomScaleChange = this.handleZoomScaleChange.bind(this);
        // reset login status
        props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    handleImageClick() {
        this.setState({underlineHeader: !this.state.underlineHeader});
    }

    handleZoomScaleChange(event) {
        this.setState({
            zoomScale: event.target.value
        });
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({submitted: true});
        const {username, password} = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

    goToRegisterPage() {
        this.props.history.push("/register");
    }

    goLoginPage(e) {
        e.preventDefault();

        this.props.history.push("/login");
    }

    render() {


        const {loggingIn, error} = this.props;
        const {username, password, submitted} = this.state;
        return (
            <div style={{
                flexGrow: '1',
                position: "relative",
                backgroundImage: `url(${imageBackgroundTop})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '100vh'
            }}>
                {/*hero section*/}

                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12} style={{height: '70vh'}}>
                        <Grid container direction="row" justify="center" alignItems="center" alignContent="center"
                              style={{height: "50vh"}}>
                            <Grid item>
                                <h4>High-Privacy</h4>
                                <h4 style={{color: "grey"}}>Real-time Notification</h4>

                            </Grid>

                        </Grid>

                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12} style={{height: '30vh'}}>
                        <Grid container>
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <img src={imageMan} style={{
                                    height: '20vh',
                                    width: 'auto',
                                    padding: '10px'
                                    // top: '-30%',
                                    // left: '100%',
                                }}/>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <img src={imageCar} style={{
                                    height: '13vh',
                                    width: 'auto',
                                    // position: 'absolute',
                                    right: '0%',
                                    // top: '20%',
                                }}/>

                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <img src={imageReporter} style={{
                                    height: '15vh',
                                    width: 'auto',
                                    // position: 'absolute',
                                    // top: '20%',
                                    // right: '8%',
                                }}/>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12} style={{height: '70vh'}}>

                        <Tabs>
                            {/* show repoter / car's owner data*/}
                        </Tabs>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12} style={{height: '30vh'}}>
                        <Grid container direction="column" justify="center" alignItems="center" alignContent="center">
                            <div>

                                <Button
                                    size="large"
                                    variant="contained"
                                    color="primary"
                                    startIcon={<Icon className="arrow_front">send</Icon>}
                                >
                                    <a onClick={(e) => {
                                        e.preventDefault();
                                        this.props.history.push("/register")
                                    }}>Request it</a>
                                </Button>
                            </div>
                            <div>Already have account? <a onClick={(e) => this.goLoginPage(e)}>Login</a></div>

                            <div style={{
                                bottom: '5%',
                                position: 'fixed',
                                right: '5%',
                            }}>
                                <i className="material-icons arrow_down" style={{fontSize: '50px'}}>
                                    keyboard_arrow_down
                                </i>
                            </div>
                        </Grid>

                    </Grid>
                </Grid>


                {/*form end*/
                }


            </div>

        );
    }
}

function mapStateToProps(state) {
    const {loggingIn, error} = state.user;
    return {
        loggingIn, error
    };
}

const connectedLandingPage = connect(
    mapStateToProps,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(LandingPage);
export {connectedLandingPage as LandingPage};
