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

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
            <div style={{ height: '200vh', width: '100%' }}>
                <Grid container direction="column" alignContent="center">
                    <Grid item>
                        <div style={{ height: '100vh', backgroundColor:'deepskyblue' }}>
                            <h4>High-Privacy Real time notification</h4>
                            
                        </div>
                    </Grid>
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
                                    <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                                    {submitted && !username &&
                                        <div className="help-block">Username is required</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                                    {submitted && !password &&
                                        <div className="help-block">Password is required</div>
                                    }
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary" style={{ width: "100%" }}>Login</button>
                                    {loggingIn &&
                                        <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                    }
                                </div>
                                <div style={{ fontSize: "2vh" }}>
                                    <div style={{ display: "inline", color: "grey" }}>Don’t have a QR sticker?</div>
                                    <a style={{ display: "inline" }} onClick={() => this.goToRegisterPage()}> Request now</a>
                                </div>
                            </form>
                        </div>

                    </Grid>

                </Grid>
            </div>

        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    const { error } = state.user
    return {
        loggingIn, error
    };
}

const connectedLoginPage = connect(
    mapStateToProps,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(LoginPage);
export { connectedLoginPage as LoginPage };









