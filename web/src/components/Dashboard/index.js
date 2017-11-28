import React, { Component } from 'react';

import {
  PageHeader,
  Row,
  Col,
  Panel,
  Button,
  FormGroup,
  ControlLabel,
  FormControl } from 'react-bootstrap';
import moment from 'moment';


import './Dashboard.css'

const appUser = JSON.parse(localStorage.getItem('app_user'));

export default class Dashboard extends Component {

  // constructor(props, context){
  //   super(props, context);
  //   this.state = {
  //     weather: {}
  //   }
  // }

  handleSubmit(e){
    e.preventDefault();
    let form = e.target;
    this.props.dashboardActions.getLocation(form.location.value)
      .then(response=>{
        let dataObj={
          lat: response.data.lat,
          lng: response.data.lng,
          date: moment()
        }
        this.props.dashboardActions.getWeather(dataObj)
      })
  }

  render() {
    let data = this.props.dashboardReducer.weather;
    return (
      <div>
        <Row className="row">
          <Col lg={12}>
            <PageHeader>Weather</PageHeader>
          </Col>
        </Row>
        <Row className="row">
          <Col lg={12}>
            <Panel collapsible defaultExpanded header={<span>Weather forecast</span>} className="admin-info">
              <form role="form" onSubmit={this.handleSubmit.bind(this)}>
                <Row>
                  <Col lg={11}>
                  <FormGroup controlId="location">
                    <FormControl
                      name="location"
                      type="text"
                      placeholder="Enter location"
                    />
                  </FormGroup>
                  </Col>
                  <Col lg={1}>
                  <FormGroup controlId="weather-search-btn">
                    <Button type="submit">Search</Button>
                  </FormGroup>
                  </Col>
                </Row>
                <Row>
                <Col lg={12}>
                  <p>{`Summary: ${data.currently ? data.currently.summary : 'N/A'}`}</p>
                </Col>
                <Col lg={12}>
                  <p>{`Temperature: ${data.currently ? data.currently.temperature : 'N/A'}`}</p>
                </Col>
                </Row>
              </form>
            </Panel>
          </Col>
        </Row>
      </div>
    );
  }
}
