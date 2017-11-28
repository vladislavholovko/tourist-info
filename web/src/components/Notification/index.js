import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

import './Notification.css'

export default class Notification extends Component {

  hideNotificationNow() {
    this.props.appActions.addNotification('');
  }

  hideNotificationWithDelay() {
    setTimeout(() => {
      this.hideNotificationNow();
    }, 2000);
  }

  render() {
    this.hideNotificationWithDelay();
    return (
      <Alert bsStyle={this.props.data.type}
             className="notification"
             onDismiss={this.hideNotificationNow.bind(this)}>
        {this.props.data.message}
      </Alert>
    );
  }

}
