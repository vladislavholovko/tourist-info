import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as dashboardActions from '../../actions/dashboard'
import * as appActions from '../../actions/app'

class Tours extends React.Component {

    render() {
        return (
            <div>
                {
                    React.cloneElement(this.props.children, {
                        appReducer: this.props.appReducer,
                        appActions: this.props.appActions,
                        dashboardReducer: this.props.dashboardReducer,
                        dashboardActions: this.props.dashboardActions,
                    })
                }
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        appReducer: state.appReducer,
        dashboardReducer: state.dashboardReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        appActions: bindActionCreators(appActions, dispatch),
        dashboardActions: bindActionCreators(dashboardActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tours);
