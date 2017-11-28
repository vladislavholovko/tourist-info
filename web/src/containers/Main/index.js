import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../../components/Header';
import Notification from '../../components/Notification';

import * as appActions from '../../actions/app'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.menuItems = [
      {
        link: '/',
        icon: 'fa-sun-o',
        text: 'Weather'
      },
    ]
  }

  render() {

    return (
      <div id="main-layout">
        {(this.props.appReducer.notification !== '')
          ? <Notification data={this.props.appReducer.notification}
                          appActions={this.props.appActions} />
          : null
        }
        <Header menuItems={this.menuItems} />
        <div id="page-wrapper" className="page-wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    appReducer: state.appReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
