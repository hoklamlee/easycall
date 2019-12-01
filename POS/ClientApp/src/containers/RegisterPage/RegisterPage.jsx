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

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            username: '',
            password: '',
            passwordConfirm: '',
            email: '',
            mobileNo:'',
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
        const { username, password,passwordConfirm,email,mobileNo } = this.state;
        if (username && password) {
            console.log(username + "," + password);
            this.props.login(username, password);
        }
    }

    goToLoginPage() {
        this.props.history.push("/login")
    }

    render() {


        const { loggingIn, error } = this.props;
        const { username, password,passwordConfirm,email,mobileNo, submitted } = this.state;
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <Grid container direction="column" alignContent="center">
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <TextOnImage
                            position="top"
                            image={logo}
                            text={<Typography style={{ backgroundColor: "rgba(255, 255, 255, 0.65)" }}>
                                <form name="form" onSubmit={this.handleSubmit}>
                                    <Typography align="center">
                                        <h5>Register</h5>
                                        </Typography>
                                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                        <label htmlFor="username">Username</label>
                                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                                        {submitted && !username &&
                                            <div className="help-block">Username is required</div>
                                        }
                                    </div>
                                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="form-control" name="email" value={email} onChange={this.handleChange} />
                                        {submitted && !username &&
                                            <div className="help-block">Username is required</div>
                                        }
                                    </div>
                                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                        <label htmlFor="mobileNo">Mobile No</label>
                                        <input type="text" className="form-control" name="mobileNo" value={mobileNo} onChange={this.handleChange} />
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
                                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                        <label htmlFor="passwordConfirm">Password Confirm</label>
                                        <input type="password" className="form-control" name="passwordConfirm" value={passwordConfirm} onChange={this.handleChange} />
                                        {submitted && !password &&
                                            <div className="help-block">Password is required</div>
                                        }
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-primary" style={{ width: "100%" }}>Register Now</button>
                                        {loggingIn &&
                                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                        }
                                    </div>
                                    <Typography>
                                        <div style={{ fontSize: "2vh" }}>
                                            <div style={{ display: "inline", color: "grey" }}>Already Have Account?</div>
                                            <a style={{ display: "inline" }} onClick={() => this.goToLoginPage()}> Login now</a>
                                        </div>
                                    </Typography>

                                </form>
                            </Typography>} />
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

const connectedRegisterPage = connect(
    mapStateToProps,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(RegisterPage);
export { connectedRegisterPage as RegisterPage };









