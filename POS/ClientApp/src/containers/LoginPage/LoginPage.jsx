import React from 'react';
import { Router, Route, Link } from 'react-router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../../store/User';
import config from 'react-global-configuration';
import logo from '../../assets/loginsign-up-top-photo.png';
import { Grid, Typography } from '@material-ui/core';
import ReactStrappForm from '../../components/ReactStrapForm';
import { width } from '@material-ui/system';
import TextOnImage from '../../components/TextOnImage';
import imageBackgroundTop from '../../assets/bg-frontpage-top.png';
import imageMan from '../../assets/bg-man-owner.png';
import imageCar from '../../assets/bg-car.png';
import imageReporter from '../../assets/bg-man-reporter.png';
import './style.css';
import Tabs from '../../components/Tabs'

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

import NavigationIcon from '@material-ui/icons/Navigation';
import Icon from '@material-ui/core/Icon';

const colors = ['7732bb', '047cc0', '00884b', 'e3bc13', 'db7c00', 'aa231f'];

class LoginPage extends React.Component {

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
        this.setState({ underlineHeader: !this.state.underlineHeader });
    }

    handleZoomScaleChange(event) {
        this.setState({
            zoomScale: event.target.value
        });
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

    goToRegisterPage() {
        this.props.history.push("/register");
    }

    render() {


        const { loggingIn, error } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div style={{ flexGrow: '1', position: "relative" }}>

                <Grid container width="100vh" direction="column">
                    <Grid item alignContent='center'>
                        <Grid container direction="column" alignContent="center">
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <TextOnImage
                                    position="bottom"
                                    image={logo}
                                    text={<Typography style={{ backgroundColor: "rgba(255, 255, 255, 0.65)" }}>
                                        <h4>High-Privacy</h4>
                                        <h4 style={{ color: "grey" }}>Real-time Notification</h4>
                                    </Typography>} />
                            </Grid>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <div style={{ marginLeft: "10vh", marginRight: "10vh" }}>
                                    <form name="form" onSubmit={this.handleSubmit}>


                                        <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                            <label htmlFor="username">Username</label>
                                            <input type="text" className="form-control" name="username" value={username}
                                                onChange={this.handleChange} />
                                            {submitted && !username &&
                                                <div className="help-block">Username is required</div>
                                            }
                                        </div>
                                        <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                            <label htmlFor="password">Password</label>
                                            <input type="password" className="form-control" name="password"
                                                value={password} onChange={this.handleChange} />
                                            {submitted && !password &&
                                                <div className="help-block">Password is required</div>
                                            }
                                        </div>
                                        <div className="form-group">
                                            <button className="btn btn-primary" style={{ width: "100%" }}>Login</button>
                                            {loggingIn &&
                                                <img
                                                    src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                            }
                                        </div>
                                        <div style={{ fontSize: "2vh" }}>
                                            <div style={{ display: "inline", color: "grey" }}>Don’t have a QR sticker?
                                            </div>
                                            <a style={{ display: "inline" }}
                                                onClick={() => this.goToRegisterPage()}> Request now</a>
                                        </div>
                                    </form>
                                </div>

                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>

            </div>

        );
    }
}

function mapStateToProps(state) {
    const { loggingIn, error } = state.user;
    return {
        loggingIn, error
    };
}

const connectedLoginPage = connect(
    mapStateToProps,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(LoginPage);
export { connectedLoginPage as LoginPage };


{/*<img src={imageBackground} alt="Smiley face" style={{*/
}
{/*    width: '100%',*/
}
{/*    height: 'auto',*/
}
{/*    right: "-10px",*/
}
{/*    position: 'relative'*/
}
{/*}}/>*/
}


{/*<div style={{*/
}
{/*    position: 'absolute',*/
}
{/*    width: '70%',*/
}
{/*    padding: '50px 15px 0px',*/
}
{/*    top: '0',*/
}
{/*}}>*/
}
{/*    <h1 style={{color: '#14162c'}}>High-Privacy </h1>*/
}
{/*    <h1 style={{color: '#14162c'}}>Real time notification</h1>*/
}
{/*</div>*/
}


{/*end*/
}
{/*<Grid container style={{position: "relative"}}>*/
}


{/*        <div className="container valign-wrapper jc-center">*/
}
{/*            <div className="valign center-align white-text">*/
}
{/*                <p className="flowtext hide-on-small-only">We give your business an internet*/
}
{/*                    presence</p>*/
}
{/*                <h3>*/
}
{/*                    Develop, Deploy, Done*/
}
{/*                </h3>*/
}

{/*                <p className="big">*/
}
{/*                    We build your website using cutting edge frameworks*/
}
{/*                    <br/>*/
}
{/*                    entirely customized and made to order*/
}
{/*                </p>*/
}

{/*                <a className="btn waves-light waves-effect m-r-16">Features</a>*/
}
{/*                <a className="btn waves-light waves-effect">Portfolio</a>*/
}
{/*            </div>*/
}
{/*        </div>*/
}
{/*</Grid>*/
}

{/*<Carousel*/
}
{/*    vertical={true}*/
}
{/*    slidesToShow={this.state.slidesToShow}*/
}
{/*    slidesToScroll={this.state.slidesToScroll}*/
}
{/*    withoutControls={this.state.withoutControls}*/
}
{/*    transitionMode={this.state.transitionMode}*/
}
{/*    cellAlign={this.state.cellAlign}*/
}
{/*    animation={this.state.animation}*/
}
{/*    zoomScale={Number(this.state.zoomScale || 0)}*/
}
{/*    wrapAround={this.state.wrapAround}*/
}
{/*    slideIndex={this.state.slideIndex}*/
}
{/*    heightMode={this.state.heightMode}*/
}
{/*>*/
}

{/*    <Grid style={{width: '100%'}}>*/
}
{/*        <Grid item lg={12} md={12} sm={12} xs={12}>*/
}
{/*        </Grid>*/
}
{/*    </Grid>*/
}

{/*    <Grid item alignContent='center'>*/
}
{/*        <div style={{height: "40vh"}}>*/
}
{/*            <div data-aos="fade-up">*/
}
{/*                <h1 style={{color: '#14162c', textAlign: 'center'}}>How It Works! </h1>*/
}
{/*            </div>*/
}
{/*        </div>*/
}
{/*    </Grid>*/
}

{/*    /!*    test form*!/*/
}
{/*    <Grid container width="100vh" direction="column">*/
}
{/*        <Grid item alignContent='center'>*/
}
{/*            <Grid container direction="column" alignContent="center">*/
}
{/*                <Grid item lg={12} md={12} sm={12} xs={12}>*/
}
{/*                    <TextOnImage*/
}
{/*                        position="bottom"*/
}
{/*                        image={logo}*/
}
{/*                        text={<Typography style={{backgroundColor: "rgba(255, 255, 255, 0.65)"}}>*/
}
{/*                            <h4>High-Privacy</h4>*/
}
{/*                            <h4 style={{color: "grey"}}>Real-time Notification</h4>*/
}
{/*                        </Typography>}/>*/
}
{/*                </Grid>*/
}
{/*                <Grid item lg={12} md={12} sm={12} xs={12}>*/
}
{/*                    <div style={{marginLeft: "10vh", marginRight: "10vh"}}>*/
}
{/*                        <form name="form" onSubmit={this.handleSubmit}>*/
}


{/*                            <div*/
}
{/*                                className={'form-group' + (submitted && !username ? ' has-error' : '')}>*/
}
{/*                                <label htmlFor="username">Username</label>*/
}
{/*                                <input type="text" className="form-control" name="username"*/
}
{/*                                       value={username}*/
}
{/*                                       onChange={this.handleChange}/>*/
}
{/*                                {submitted && !username &&*/
}
{/*                                <div className="help-block">Username is required</div>*/
}
{/*                                }*/
}
{/*                            </div>*/
}
{/*                            <div*/
}
{/*                                className={'form-group' + (submitted && !password ? ' has-error' : '')}>*/
}
{/*                                <label htmlFor="password">Password</label>*/
}
{/*                                <input type="password" className="form-control" name="password"*/
}
{/*                                       value={password} onChange={this.handleChange}/>*/
}
{/*                                {submitted && !password &&*/
}
{/*                                <div className="help-block">Password is required</div>*/
}
{/*                                }*/
}
{/*                            </div>*/
}
{/*                            <div className="form-group">*/
}
{/*                                <button className="btn btn-primary" style={{width: "100%"}}>Login*/
}
{/*                                </button>*/
}
{/*                                {loggingIn &&*/
}
{/*                                <img*/
}
{/*                                    src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>*/
}
{/*                                }*/
}
{/*                            </div>*/
}
{/*                            <div style={{fontSize: "2vh"}}>*/
}
{/*                                <div style={{display: "inline", color: "grey"}}>Don’t have a QR sticker?*/
}
{/*                                </div>*/
}
{/*                                <a style={{display: "inline"}}*/
}
{/*                                   onClick={() => this.goToRegisterPage()}> Request now</a>*/
}
{/*                            </div>*/
}
{/*                        </form>*/
}
{/*                    </div>*/
}

{/*                </Grid>*/
}

{/*            </Grid>*/
}
{/*        </Grid>*/
}
{/*    </Grid>*/
}
{/*    /!* test form end*!/*/
}
{/*</Carousel>*/
}

{/*form*/
}







