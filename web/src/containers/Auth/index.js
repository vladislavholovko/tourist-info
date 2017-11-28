import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as authActions from '../../actions/auth';
import * as appActions from '../../actions/app'

class Auth extends React.Component {

  render() {

    return (
      <div>
        {
          React.cloneElement(this.props.children, {
            appReducer: this.props.appReducer,
            appActions: this.props.appActions,
            authReducer: this.props.authReducer,
            authActions: this.props.authActions
          })
        }
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    appReducer: state.appReducer,
    authReducer: state.authReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch),
    authActions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

