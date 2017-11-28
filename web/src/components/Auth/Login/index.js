import React from 'react'
import Button from 'react-bootstrap/lib/Button'
import Panel from 'react-bootstrap/lib/Panel'
import { FormControl } from 'react-bootstrap'
import {Link} from 'react-router'

import './Login.css'

export default class Login extends React.Component {

  submitHandler(e) {
    e.preventDefault();
    let form = e.target;
    this.props.authActions.login(form.email.value, form.password.value)
      .then(response => {
        localStorage.setItem('api_token', response.token);
        // localStorage.setItem('app_user', JSON.stringify(response.user));
        window.location = '/';
      })
      .catch((err)=>{
        form.className = 'has-error';
        // form.childNodes[0].innerHTML = err.response.message;
      });
  }

  render() {
    return (
      <div className="col-md-4 col-md-offset-4">
        <Panel header={<h3>Please Sign In</h3>} className="login-panel">

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

              <div className="form-group">
                <FormControl
                  className="form-control"
                  placeholder="Password"
                  type="password"
                  name="password"
                />
              </div>

              <div className="form-group pull-right">
                <Link to={`/forgot-password`}>Forgot Password?</Link>
              </div>

              <Button type="submit" bsSize="large" bsStyle="success" block>Login</Button>
            </fieldset>
          </form>

        </Panel>

      </div>

    );
  }
}
