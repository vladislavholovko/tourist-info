import React from 'react'
import Button from 'react-bootstrap/lib/Button'
import Panel from 'react-bootstrap/lib/Panel'
import { FormControl } from 'react-bootstrap'

class InviteAdmin extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: this.props.params.email
    };

    this.submitForm = this.submitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitForm(e) {
    e.preventDefault();
    let form = e.target;
    let adminObj = {
      firstname   : form.firstName.value,
      lastname    : form.lastName.value,
      email       : this.state.email,
      phone       : form.phone.value,
      password    : form.password.value,
      uuid        : this.props.params.id
    };
    this.props.authActions.acceptInviteAdmin(adminObj)
      .then(() => {
        window.location = '/';
      })
      .catch((err)=>{
        form.className = 'has-error';
        form.childNodes[0].innerHTML = err.response.message;
      });
  }

  render() {
    return (
      <div className="col-md-4 col-md-offset-4">
        <Panel header={<h3>Please Register</h3>} className="login-panel">
          <form role="form" onSubmit={this.submitForm}>
            <div className="control-group help-block"></div>
              <fieldset>
                <div className="form-group">
                  <FormControl
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    name="firstName"
                  />
                </div>

                <div className="form-group">
                  <FormControl
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    name="lastName"
                  />
                </div>

                <div className="form-group">
                  <FormControl
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                    name="phone"
                  />
                </div>

                <div className="form-group">
                  <FormControl
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group">
                  <FormControl
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                  />
                </div>

                <div className="form-group">
                  <FormControl
                    type="password"
                    className="form-control"
                    placeholder="Confirm password"
                    name="confirmPassword"
                  />
                </div>

                <Button type="submit" bsSize="large" bsStyle="success" block>Register</Button>
              </fieldset>
          </form>
        </Panel>
      </div>
    )
  }
}

export default InviteAdmin;
