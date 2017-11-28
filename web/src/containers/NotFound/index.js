import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import './NotFound.css';

export default class NotFound extends React.Component {

  render() {

    return (
      <div className="col-md-4 col-md-offset-4">
        <Panel header={<h3>Not Found</h3>} className="login-panel">
          <div>404</div>
        </Panel>
      </div>
    );
  }
}
