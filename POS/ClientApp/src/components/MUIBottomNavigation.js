import React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store/User';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Home, NoteAdd, Sms, Notifications, EventNote } from '@material-ui/icons';


const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

class MUIBottomNavigation extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: 'Home',
        }
    }


    handleChange(event, newValue) {
        console.log(newValue);

        this.setState({
            value: newValue
        });
    }

    render() {
        const { loggedIn } = this.props;


        return (
            loggedIn || localStorage.getItem('user') ?

            <BottomNavigation value={this.state.value} onChange={(e,v)=>this.handleChange(e,v)} style={{ width: '100%' }}>
                <BottomNavigationAction label="Home" value="Home" icon={<Home />} />
                <BottomNavigationAction label="Apply" value="Apply" icon={<NoteAdd />} />
                <BottomNavigationAction label="SMS" value="SMS" icon={<Sms />} />
                <BottomNavigationAction label="Notifications" value="Notifications" icon={<Notifications />} />
                <BottomNavigationAction label="Log" value="Log" icon={<EventNote />} />
                </BottomNavigation> :
                ""
        );
    }

}

function mapStateToProps(state) {
    const { loggedIn, user } = state.authentication;

    return {
        loggedIn, user
    };
}

export default connect(
    mapStateToProps,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(MUIBottomNavigation);
