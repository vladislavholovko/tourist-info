import React from 'react'
import Button from 'react-bootstrap/lib/Button'
import Panel from 'react-bootstrap/lib/Panel'
import { FormControl } from 'react-bootstrap'

import './ForgotPassword.css'

export default class ForgotPassword extends React.Component {

  submitHandler(e) {
    e.preventDefault();
    let form = e.target;
    this.props.authActions.forgotPassword(form.email.value)
      .then((response) => {
        form.className = 'has-success';
        form.childNodes[0].innerHTML = 'Email was sending. Check you email.';
        setTimeout(() => {
          window.location = '/';
        }, 3000);
      })
      .catch((err) => {
        form.className = 'has-error';
        form.childNodes[0].innerHTML = err.response.message;
      });
  }

  render() {
    return (
      <div className="col-md-4 col-md-offset-4">
        <Panel header={<h3>Forgot Password</h3>} className="login-panel">

          <form role="form" onSubmit={this.submitHandler.bind(this)}>
            <div className="control-group help-block"></div>
            <fieldset>
              <div className="form-group">
                <FormControl
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                />
              </div>

              <Button type="submit" bsSize="large" bsStyle="success" block>Reset Password</Button>
            </fieldset>
          </form>

        </Panel>

      </div>

    );
  }
}
