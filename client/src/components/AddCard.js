import React from 'react';
import IndividualCard from './IndividualCard';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import queryString from 'query-string';
import moment from 'moment';
import Login from './Login.js'

export default class AddCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            summary: null, 
            button1Text: null,
            button1Link: null, 
            button2Text: null, 
            button2Link: null, 
            classes: null, 
            image: null, 
            longDescription: null,
            editing: false,
            cardType: null,
            date: null,
            loggedIn: false
        }
        var body = document.getElementsByTagName("BODY")[0];
        body.style.background = "white";
    }

    componentWillMount(){
        var params = queryString.parse(this.props.location.search);
        if(params['id'] != null){
            var query = params['cardtype'] + "/" + params['id'];
            axios.get('/api/Card/' + query)
                .then(response =>{
                    this.setState({...response.data,editing: true, id: params['id'], cardType: params['cardtype']});
                    this.updateInputFields();
                })
                .catch(err =>{
                    console.log(err);
                })
        }
    }

    updateInputFields = () => {
        for(var field in this.state){
            console.log(field);
            var elem = document.getElementsByName(field);
            if(elem.length > 0){
                elem = elem[0]
                elem.value = this.state[field];
            }
        }
    }

    updateLoggedIn = (value) => {
        this.setState({loggedIn: value});
    }

    render() {
        return (
            <div>
            {!this.state.loggedIn && 
                <Login updateLogin={this.updateLoggedIn}></Login>
            }
            {this.state.loggedIn &&
            <div className="card-row">
                <Formik
                    onSubmit={(values, { setSubmitting }) => {
                        if (!("cardType" in values) && this.state.cardType == null){
                            alert("please choose card type")
                            return;
                        }
                        this.setState(values);
                        if("preview" in values && values["preview"] === true){
                            return;
                        }
                        if(this.state.editing){
                            var url = this.state.cardType + "/" + this.state.id;
                            axios.patch("/api/Card/" + url, values)
                                .then(response => {
                                    alert("Card has successfully been updated")
                                })
                                .catch(err => {})
                        }
                        else{
                            values['date'] = moment().format('MMM Do YYYY');
                            axios.post('/api/Card/',values)
                                .then(response => {
                                    alert("Card has successfully been added")
                                })
                                .catch(err => {})
                            }
                    }}
                    >
                    {() => (
                        <Form>
                            <label>Title: </label>
                            <Field type="text" name="title" style={{ width: 300 }}/>
                            <br></br>
                            <br></br>
                            <label>Summary:</label>
                            <Field type="text" name="summary" style={{ width: 300 }}/>
                            <br></br>
                            <br></br>
                            <label>Link for button 1: </label>
                            <Field type="text" name="button1Link" style={{ width: 300 }}/>
                            <br></br>
                            <br></br>
                            <label>Text for button 1: </label>
                            <Field type="text" name="button1Text" style={{ width: 300 }}/>
                            <br></br>
                            <br></br>
                            <label>Link for button 2: </label>
                            <Field type="text" name="button2Link" style={{ width: 300 }}/>
                            <br></br>
                            <br></br>
                            <label>Text for button 2: </label>
                            <Field type="text" name="button2Text" style={{ width: 300 }}/>
                            <br></br>
                            <br></br>
                            <Field component="textarea" name="longDescription" style={{ height: 200, width: 600 }}/>
                            <br></br>
                            <br></br>
                            <Field name="cardType" component="select">
                                <option default>Select</option>
                                <option value="project">Project</option>
                                <option value="work">Work</option>
                                <option value="activity">Activity</option>
                            </Field>
                            <br></br>
                            <br></br>
                            <label>Preview mode</label>
                            <Field type="checkbox" name="preview"></Field>
                            <br></br>
                            <br></br>
                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
                <IndividualCard {...this.state}></IndividualCard>
            </div>
            }
            </div>
        );
    }
}