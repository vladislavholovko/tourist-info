import React from 'react'
import Button from 'react-bootstrap/lib/Button'
import Panel from 'react-bootstrap/lib/Panel'
import { FormControl } from 'react-bootstrap'

import './ResetPassword.css';

export default class ResetPassword extends React.Component {

  submitHandler(e) {
    e.preventDefault();
    let form = e.target;
    if (form.new_password.value === form.confirm_password.value) {
      this.props.authActions.resetPassword(form.reset_token.value, form.new_password.value)
        .then((response) => {
          form.className = 'has-success';
          form.childNodes[0].innerHTML = 'Password changed!';
          setTimeout(() => {
            window.location = '/';
          }, 3000);
        })
        .catch((err) => {
          form.className = 'has-error';
          form.childNodes[0].innerHTML = err.response.message;
        });
    } else {
      form.className = 'has-error';
      form.childNodes[0].innerHTML = 'Confirm password  didn\'t match password';
    }
  }

  render() {

    return (
      <div className="col-md-4 col-md-offset-4">
        <Panel header={<h3>Reset Password</h3>} className="login-panel">

          <form role="form" onSubmit={this.submitHandler.bind(this)}>
            <div className="control-group help-block"></div>
            <fieldset>
              <div className="form-group">
                <FormControl
                  type="password"
                  className="form-control"
                  placeholder="New password"
                  name="new_password"
                />
              </div>
              <div className="form-group">
                <FormControl
                  type="password"
                  className="form-control"
                  placeholder="Confirm new password"
                  name="confirm_password"
                />
              </div>
              <input type="hidden" name="reset_token" value={ this.props.params.resetToken }/>
              <Button type="submit" bsSize="large" bsStyle="success" block>New Password</Button>
            </fieldset>
          </form>

        </Panel>

      </div>
    );
  }
}
