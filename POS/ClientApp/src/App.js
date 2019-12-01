import React from 'react';
import { Router, Route } from 'react-router';
import { connect } from 'react-redux';
import config from 'react-global-configuration';
import configuration from './config/config';
import { history } from './helpers/history';
import { actionCreators } from './store/Alert';
import { PrivateRoute } from './components/PrivateRoute';

import Layout from './components/Layout';
import Home from './containers/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import { LoginPage } from './containers/LoginPage';
import { RegisterPage } from './containers/RegisterPage';
import { ProfilePage } from './containers/ProfilePage/ProfilePage';
import { ProfileDrawer } from './containers/ProfilePage/ProfileDrawer';

import { NotificationItemPage } from './containers/NotificationItemPage/NotificationItemPage';
import { CreateNotificationItemPage } from './containers/NotificationItemPage/CreateNotificationItemPage';
import { EditNotificationItemPage } from './containers/NotificationItemPage/EditNotificationItemPage';

import { NotificationPage } from './containers/NotificationPage/NotificationPage';

import { OrderTab } from './containers/OrderPage/OrderTab';
//import { OrderPage } from './containers/OrderPage/OrderPage';
import { AddOrderPage } from './containers/OrderPage/AddOrderPage';
import { EditOrderPage } from './containers/OrderPage/EditOrderPage';
import { ReceiptPage } from './containers/OrderPage/ReceiptPage';

import { OrderItemPage } from './containers/OrderItemPage/OrderItemPage';
import { AddOrderItemPage } from './containers/OrderItemPage/AddOrderItemPage';
import { EditOrderItemPage } from './containers/OrderItemPage/EditOrderItemPage';

import { InventoryTab } from './containers/InventoryPage/InventoryTab';
import { InventoryPage } from './containers/InventoryPage/InventoryPage';
import { AddInventoryPage } from './containers/InventoryPage/AddInventoryPage';
import { EditInventoryPage } from './containers/InventoryPage/EditInventoryPage';

import { PurchaserTab } from './containers/PurchaserPage/PurchaserTab';
import { PurchaserPage } from './containers/PurchaserPage/PurchaserPage';
import { AddPurchaserPage } from './containers/PurchaserPage/AddPurchaserPage';
import { EditPurchaserPage } from './containers/PurchaserPage/EditPurchaserPage';

import { StatusPage } from './containers/StatusPage/StatusPage';
import { AddStatusPage } from './containers/StatusPage/AddStatusPage';
import { EditStatusPage } from './containers/StatusPage/EditStatusPage';

import { UserPage } from './containers/UserPage/UserPage';
import { AddUserPage } from './containers/UserPage/AddUserPage';
import { EditUserPage } from './containers/UserPage/EditUserPage';

import { SystemParamPage } from './containers/SystemParamPage/SystemParamPage';
import { AddSystemParamPage } from './containers/SystemParamPage/AddSystemParamPage';
import { EditSystemParamPage } from './containers/SystemParamPage/EditSystemParamPage';

import { SiteSettingMain } from './containers/SiteSettingPage/SiteSettingMain';


import 'antd/dist/antd.css';


const alertStyle = {
    position: 'fixed',
    bottom: 0,
    width: '100%',
}

class App extends React.Component {
    constructor(props) {
        super(props);


        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(actionCreators.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div style={{height: '100vh'}}>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
                {alert.message &&
                    <div style={alertStyle} className={`alert ${alert.type}`}>{alert.message}</div>
                }

                <Router history={history}>
                    <Layout>
                        {/*<PrivateRoute exact path="/" component={Home} />*/}
                        <PrivateRoute exact path="/" component={Home} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <PrivateRoute path='/counter' component={Counter} />

                        <PrivateRoute path='/createnotificationitem' component={CreateNotificationItemPage} />
                        <PrivateRoute path='/editnotificationitem/:id' component={EditNotificationItemPage} />

                        <PrivateRoute path='/notification' component={NotificationPage} />

                        <PrivateRoute path='/profile' component={ProfileDrawer} />
                        <PrivateRoute path='/fetch-data/:startDateIndex?' component={FetchData} />

                        <PrivateRoute path='/sitesetting' component={SiteSettingMain} />

                        <PrivateRoute path='/status' component={StatusPage} />
                        <PrivateRoute path='/createstatus' component={AddStatusPage} />
                        <PrivateRoute path='/editstatus/:id' component={EditStatusPage} />

                        <PrivateRoute path='/users' component={UserPage} />
                        <PrivateRoute path='/createuser' component={AddUserPage} />
                        <PrivateRoute path='/edituser/:id' component={EditUserPage} />   

                        <PrivateRoute path='/systemparams' component={SystemParamPage} />
                        <PrivateRoute path='/createsystemparam' component={AddSystemParamPage} />
                        <PrivateRoute path='/editsystemparam/:id' component={EditSystemParamPage} />   
                    </Layout>
                </Router >


            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 