﻿import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { Router, Route, Link, Redirect } from 'react-router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../../store/Order';
import config from 'react-global-configuration';

import EditableTable from '../../components/AntTable';
import ReactStrapFrom from '../../components/ReactStrapForm';
import PageHeader from '../../components/PageHeader';
import { Divider, Grid, Paper } from '@material-ui/core';
import RightBottomButton from '../../components/RightBottomButton';
import MaterialUIDialog from '../../components/MaterialUIDialog';

import MaterialUIButton from '../../components/MaterialUIButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus, faTrash, faPen, faTools, faArrowLeft, faPrint,faHeart, faCross, faCopy } from '@fortawesome/free-solid-svg-icons'

import { OrderItemPage } from '../OrderItemPage/OrderItemPage';
import moment from 'moment';

class EditOrderPage extends React.Component {
    constructor(props) {
        super(props);


        const orderId = this.props.match.params.id;
        const userId = JSON.parse(localStorage.getItem('user')).userId;

        this.state = {
            orderId: orderId,
            formUpdated: false,
            userId: userId
        };

        this.props.getFavouriteOrderByOrderIdAndUserId(orderId,userId);
        this.props.getAllUsers();
        this.props.getAllPurchasers();
        this.props.getInventoriesByCategory("All");

        this.props.getOrderById(orderId);


        this.submitForm = this.submitForm.bind(this);
        this.goBack = this.goBack.bind(this);
        this.handeCreate = this.handeCreate.bind(this);

        //this.submitInfo = this.submitInfo.bind(this);



    }

    handeCreate() {
        //this.props.history.push("/createorder");
        this.props.history.push("/createorderitem/" + this.state.orderId);
    }


    //submitInfo(event) {
    //    event.preventDefault();

    //    var userId = this.props.user.userId;
    //    var username = event.target[0].value;
    //    var email = event.target[1].value;
    //    var lastName = event.target[2].value;
    //    var firstName = event.target[3].value;
    //    console.log(userId, firstName, lastName, email, username);
    //    this.props.updateUserInfo(userId, firstName, lastName, email, username);
    //}

    submitForm(event) {
        event.preventDefault();

        var orderDate = event.target["orderDate"].value;
        var remark = event.target["remark"].value;
        var deliverBy = event.target["deliverBy"].value;
        var deliverDate = event.target["deliverDate"].value;
        var shop = event.target["purchaser"].value;

        //var userId = JSON.parse(localStorage.getItem('user')).userId;
        const orderId = this.props.match.params.id;

        this.props.updateOrder(orderId, orderDate, remark, deliverBy, deliverDate, shop, this.state.userId).then(success => {
            if (success) {
                //this.props.history.push("/order");
                window.location.reload();
            }
        });


    }

    addFavouriteOrder(name, orderId, userId) {
        this.props.addFavouriteOrder(name, orderId, userId);
    }

    deleteFavouriteOrder(favouriteOrderId) {
        this.props.deleteFavouriteOrder(favouriteOrderId);
    }

    duplicate() {
        this.props.duplicate(this.state.orderId, moment().toDate(), moment().toDate(), this.state.userId);
    }

    print() {
        this.props.history.push("/printorder/" + this.state.orderId);
    }

    goBack() {
        this.props.history.push("/order");
    }

    render() {

        return (
            <div style={{ marginTop: '2vh' }}>
                <PageHeader
                    left={<div style={{ display: 'inline', float: 'left' }}><a style={{ marginBottom: 10 }} onClick={this.goBack}><FontAwesomeIcon icon={faArrowLeft} /> Back</a></div>}
                    right={<div style={{ display: 'inline', float: 'right' }}>Edit Order</div>}
                />

                <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="flex-start"
                >
                    {
                        this.props.favouriteOrder?
                            <Grid item>
                                <MaterialUIButton icon={<FontAwesomeIcon icon={faTrash} />} label="Remove from favourite" onClick={() => this.deleteFavouriteOrder(this.props.favouriteOrder.favouriteOrderId)} />
                            </Grid>
                            :
                            <Grid item>
                                <MaterialUIDialog
                                    title="Add to Favourite"
                                    content="Please enter the favourite name."
                                    buttonComponent={<MaterialUIButton icon={<FontAwesomeIcon icon={faHeart} />} label="Add to favourite" />}
                                    submitLabel="Save"
                                    onSubmit={(val) => this.addFavouriteOrder(val, this.state.orderId, this.state.userId)}
                                />
                            </Grid>
                    }

                    <Grid item>
                        <MaterialUIButton icon={<FontAwesomeIcon icon={faPrint} />} label="Print" onClick={() => this.print()} />
                    </Grid>
                    <Grid item>
                        <MaterialUIButton icon={<FontAwesomeIcon icon={faCopy} />} label="Duplicate" onClick={() => this.duplicate()} />
                    </Grid>
                </Grid>
                {this.props.users.length > 0 && this.props.purchasers.length > 0 && this.props.item ?
                    <Paper style={{ marginLeft: '2vh', marginRight: '2vh' }}>

                        <ReactStrapFrom
                            onSubmitLabel="Save"
                            onSubmit={this.submitForm}
                            fields={
                                [{
                                    label: "Order Date",
                                    type: "datetime",
                                    id: "orderDate",
                                    placeHolder: "",
                                    defaultValue: this.props.item.orderDate
                                }, {
                                    label: "Remark",
                                    type: "text",
                                    id: "remark",
                                    placeHolder: "",
                                    defaultValue: this.props.item.remark
                                }
                                    , {
                                    label: "Deliver By",
                                    type: "select",
                                    id: "deliverBy",
                                    options: this.props.users,
                                    placeHolder: "",
                                    defaultValue: this.props.item.deliverById ? String(this.props.item.deliverById) : ""
                                }, {
                                    label: "Deliver Date",
                                    type: "datetime",
                                    id: "deliverDate",
                                    placeHolder: "",
                                    defaultValue: this.props.item.deliverDate

                                }, {
                                    label: "Shop",
                                    type: "select",
                                    options: this.props.purchasers,
                                    id: "purchaser",
                                    placeHolder: "",
                                    defaultValue: this.props.item.purchaserId ? String(this.props.item.purchaserId) : ""

                                }, {
                                    label: "Location",
                                    type: "text",
                                    id: "location",
                                    placeHolder: "",
                                    defaultValue: this.props.item.purchaser ? this.props.item.purchaser.location : "",
                                    editable: false
                                }]
                            } />

                        <Divider style={{ marginTop: 20 }} />
                        <div style={{ fontSize: 20 }}>Total Price: ${this.props.totalPrice}</div>

                        <OrderItemPage orderId={this.state.orderId} />


                    </Paper>

                    :

                    <div></div>
                }

                <RightBottomButton label="Create" handleClick={this.handeCreate}><FontAwesomeIcon icon={faPlus} /></RightBottomButton>

            </div>

        );
    }
}



function mapStateToProps(state) {
    const { loading, error, item, users, purchasers, inventories, totalPrice, favouriteOrder } = state.order;
    return {
        loading, error, item, users, purchasers, inventories, totalPrice, favouriteOrder
    };
}

const connectedEditOrderPage = connect(
    mapStateToProps,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(EditOrderPage);
export { connectedEditOrderPage as EditOrderPage };









