import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import ReactStepper from './ReactStepper';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}


export default function CenteredTabs(props) {
    const theme = useTheme();
    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
            width: '100%',
            boxShadow: '0px 0px'
        }
    });
    const classes = useStyles();
    const [value, setValue] = React.useState(0);


    const handleChangeIndex = index => {
        setValue(index);
    };
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="relative" color="inherit" style={{boxShadow:'0px 0px'}}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Reporter" {...a11yProps(0)} />
                    <Tab label="Car's Owner" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <ReactStepper>
                    {/*  data for reporter  */}
                    </ReactStepper>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <ReactStepper>
                    {/*   data for car's owner  */}
                    </ReactStepper>
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}