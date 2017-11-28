import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Loading extends Component {

  render() {
    return (
      <div>
        <Row>
          <Col lg={12} className="text-center">
            <div className="fa fa-spinner"></div>
          </Col>
        </Row>
      </div>
    );
  }
}
