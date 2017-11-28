import React from 'react'
import Button from 'react-bootstrap/lib/Button'
import Panel from 'react-bootstrap/lib/Panel'
import { FormControl } from 'react-bootstrap'
import {Link} from 'react-router'

import '../Login/Login.css'

export default class Register extends React.Component {

  submitHandler(e) {
    e.preventDefault();
    let form = e.target;
    this.props.authActions.register(form.email.value, form.password.value, form.full_name.value)
      .then(response => {
        window.location = '#/login';
      })
      .catch((err)=>{
        form.className = 'has-error';
      });
  }

  render() {
    return (
      <div className="col-md-4 col-md-offset-4">
        <Panel header={<h3>Singn up new user</h3>} className="login-panel">

          <form role="form" onSubmit={this.submitHandler.bind(this)}>
            <div className="control-group help-block"></div>
            <fieldset>

                <div className="form-group">
                <FormControl
                  type="text"
                  className="form-control"
                  placeholder="Full name"
                  name="full_name"
                />
              </div>

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

              {/* <div className="form-group pull-right">
                <Link to={`/forgot-password`}>Forgot Password?</Link>
              </div> */}

              <Button type="submit" bsSize="large" bsStyle="success" block>Sign up</Button>
              <p className="or-divider">OR</p>
              <Button bsStyle="primary" bsSize="large" className="sign-in-btn" onClick={()=>{window.location='#/login'}}>Sign in</Button>
            </fieldset>
          </form>

        </Panel>

      </div>

    );
  }
}
