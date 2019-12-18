import React from 'react';
import {
    Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import { Router, Route, Link } from 'react-router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../../store/Order';
import config from 'react-global-configuration';

import MaterialTable from 'material-table';
import { Paper, Grid, Button, TextField, FormControl, FormLabel, FormControlLabel, Checkbox } from '@material-ui/core';
import RightBottomButton from '../../components/RightBottomButton';
import MaterialUIButton from '../../components/MaterialUIButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPlus, faTrash, faPen, faTools, faHeart } from '@fortawesome/free-solid-svg-icons'
import { history } from '../../helpers/history';
import MUICard from '../../components/MUICard';
import MUIStepper from '../../components/MUIStepper';
import ImageUploader from 'react-images-upload';

class CreateNotificationItemPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            itemType: "",
            itemName: "",
            description:"",
            pictures: [],
            gilad: true,
            jason: false,
            antoine: false,
        }
        this.onDrop = this.onDrop.bind(this);
    }
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
    nextPage() {
        this.setState({ page: this.state.page + 1 });
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 });
    }

    setItemType(value) {
        this.setState({ itemType: value });
        this.nextPage();
    }

    setItemName(event) {
        this.setState({ itemName: event.target.value });
    }

    setDescription(event) {
        this.setState({ description: event.target.value });
    }

    handleChange(name, event) {
        this.setState({ [name]: event.target.checked });
    };

    showPage() {
        switch (this.state.page) {
            case 0:
                return (
                    <Grid container justify="center" alignContent="center" alignItems="center" direction="column" style={{ minHeight: '70vh' }} spacing={0}>
                        <Grid item>
                            What is the notification item for?

                        </Grid>
                        <Grid item spacing={1}>
                            <div style={{ '& > *': "1vh" }}>
                                <Button variant="outlined" color="primary" onClick={() => this.setItemType("Car")}>
                                    Car
                                </Button>
                                <Button variant="outlined" color="primary" onClick={() => this.setItemType("Other")}>
                                    Other
                            </Button>
                            </div>

                        </Grid>
                    </Grid>

                );
            case 1:
                return (
                    <React.Fragment>
                        <Grid container justify="space-between" spacing={24} style={{ paddingLeft: "2vh", paddingRight: '2vh' }}>
                            <Grid item>
                                <Button onClick={()=>this.previousPage()}>Back</Button>
                            </Grid>
                            <Grid item>
                                <Button onClick={()=>this.nextPage()}>Next</Button>
                                </Grid>

                        </Grid>
                        <Grid container justify="center" alignContent="center" alignItems="center" direction="column" style={{ minHeight: '70vh' }} spacing={0}>
                            <Grid item>
                                How to name this item?
    
                        </Grid>
                            <Grid item spacing={1}>
                                <TextField onChange={(value)=>this.setItemName(value)} id="standard-basic" label="" />

                            </Grid>

                        </Grid>

                    </React.Fragment>
                )
            case 2:
                return (
                    <React.Fragment>
                        <Grid container justify="space-between" spacing={24} style={{ paddingLeft: "2vh", paddingRight: '2vh' }}>
                            <Grid item>
                                <Button onClick={() => this.previousPage()}>Back</Button>
                            </Grid>
                            <Grid item>
                                <Button onClick={() => this.nextPage()}>Next</Button>
                            </Grid>

                        </Grid>
                        <Grid container justify="center" alignContent="center" alignItems="center" direction="column" style={{ minHeight: '70vh' }} spacing={0}>
                            <Grid item>Choose a picture for your item</Grid>
                            <Grid item spacing={1}>
                                <ImageUploader
                                    withIcon={true}
                                    buttonText='Choose images'
                                    onChange={this.onDrop}
                                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                    maxFileSize={5242880}
                                    withPreview={true}
                                />
                            </Grid>

                        </Grid>

                    </React.Fragment>
                )
            case 3:
                return (
                    <React.Fragment>
                        <Grid container justify="space-between" spacing={24} style={{ paddingLeft: "2vh", paddingRight: '2vh' }}>
                            <Grid item>
                                <Button onClick={() => this.previousPage()}>Back</Button>
                            </Grid>
                            <Grid item>
                                <Button onClick={() => this.nextPage()}>Next</Button>
                            </Grid>

                        </Grid>
                        <Grid container justify="center" alignContent="center" alignItems="center" direction="column" style={{ minHeight: '70vh' }} spacing={0}>
                            <Grid item>Description of this item</Grid>
                            <Grid item spacing={1}>
                                <TextField onChange={(value) => this.setDescription(value)} id="standard-basic" label="" />

                            </Grid>

                        </Grid>

                    </React.Fragment>
                )
            case 4:
                return (
                    <React.Fragment>
                        <Grid container justify="space-between" spacing={24} style={{ paddingLeft: "2vh", paddingRight: '2vh' }}>
                            <Grid item>
                                <Button onClick={() => this.previousPage()}>Back</Button>
                            </Grid>
                            <Grid item>
                                <Button onClick={() => this.nextPage()}>Next</Button>
                            </Grid>

                        </Grid>
                        <Grid container justify="center" alignContent="center" alignItems="center" direction="column" style={{ minHeight: '70vh' }} spacing={0}>
                            <Grid item>Notification Method</Grid>
                            <Grid item spacing={1}>
                                <FormControl component="fieldset" spacing={3}>
                                    <FormLabel component="legend">Assign responsibility</FormLabel>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox checked={this.state.gilad} onChange={(e)=>this.handleChange('gilad',e)} value="gilad" />}
                                            label="Gilad Gray"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={this.state.jason} onChange={(e)=>this.handleChange('jason',e)} value="jason" />}
                                            label="Jason Killian"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={this.state.antoine} onChange={(e)=>this.handleChange('antoine',e)} value="antoine" />
                                            }
                                            label="Antoine Llorca"
                                        />
                                    </FormGroup>
                                    </FormControl>
                            </Grid>

                        </Grid>

                    </React.Fragment>
                )
            case 5:
                return (
                    <React.Fragment>
                        <Grid container justify="space-between" spacing={24} style={{ paddingLeft: "2vh", paddingRight: '2vh' }}>
                            <Grid item>
                                <Button onClick={() => this.previousPage()}>Back</Button>
                            </Grid>
                            <Grid item>
                                <Button onClick={() => this.nextPage()}>Finish</Button>
                            </Grid>

                        </Grid>
                        <Grid container justify="center" alignContent="center" alignItems="center" direction="column" style={{ minHeight: '70vh' }} spacing={0}>
                            <Grid item>Preview</Grid>
                            <Grid item spacing={1}>
                                    {/*
                                      <FormControl component="fieldset" spacing={3}>
                                     <FormLabel component="legend">Assign responsibility</FormLabel>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox checked={this.state.gilad} onChange={(e) => this.handleChange('gilad', e)} value="gilad" />}
                                            label="Gilad Gray"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={this.state.jason} onChange={(e) => this.handleChange('jason', e)} value="jason" />}
                                            label="Jason Killian"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={this.state.antoine} onChange={(e) => this.handleChange('antoine', e)} value="antoine" />
                                            }
                                            label="Antoine Llorca"
                                        />
                                    </FormGroup>
                                    </FormControl>
                                    */}
                                    {this.state.itemType}
                                    {this.state.itemName}
                                    {this.state.description}
                                {this.state.pictures}
                                {this.state.gilad}                                     {this.state.gilad}
                                {this.state.jason}
                                {this.state.antoine}


                                
                            </Grid>

                        </Grid>

                    </React.Fragment>
                )
            default:
                break;
        }
    }

    render() {
        const steps = ["Create item name", "What type is it?", "What do you want to show for others?", "How they can content you?"];

        return (
            <div style={{ marginTop: '2vh' }}>


                <Grid container justify="center" alignContent="center" alignItems="center" direction="column" style={{ minHeight: '70vh' }} spacing={0}>
                    {this.showPage(this.state.page)}

                </Grid>


                {/*<MUIStepper steps={steps} activeStep={0} />*/}

            </div>
        )
    }

}

function mapStateToProps(state) {
    const { loading, error, items } = state.order;
    return {
        loading, error, items
    };
}

const connectedCreateNotificationItemPage = connect(
    mapStateToProps,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(CreateNotificationItemPage);
export { connectedCreateNotificationItemPage as CreateNotificationItemPage };






