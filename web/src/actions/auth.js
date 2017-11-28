import * as CONSTANT from '../constants/auth';
import sendRequest from '../services/api';


export function register(email, password, name) {
  return dispatch => {
    const requestBody = {
      fullName: name,
      email: email,
      password: password,
    };

    return sendRequest('auth/register', 'POST', requestBody)
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: CONSTANT.LOGIN,
          });
          return response.data;
        } else {
          let error = new Error(response.statusText);
          error.response = response.data;
          throw error;
        }
      })
  }
}


export function login(email, password) {
  return dispatch => {
    const requestBody = {
      email: email,
      password: password,
    };

    return sendRequest('auth/sign_in', 'POST', requestBody)
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: CONSTANT.LOGIN,
          });
          return response.data;
        } else {
          let error = new Error(response.statusText);
          error.response = response.data;
          throw error;
        }
      })
  }
}

export function logout() {
  return dispatch => {

    return sendRequest('admin/logout', 'POST')
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: CONSTANT.LOGOUT,
          });
          return response.data;
        } else {
          let error = new Error(response.statusText);
          error.response = response.data;
          throw error;
        }
      })
  }
}


export function forgotPassword(email) {
  return dispatch => {
    const requestBody = {
      email: email,
      type: 'admin'
    };

    return sendRequest('user/reset_password', 'POST', requestBody)
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: CONSTANT.FORGOT_PASSWORD,
          });
          return true;
        } else {
          let error = new Error(response.statusText);
          error.response = response.data;
          throw error;
        }
      })
  }
}

export function resetPassword(token, new_password) {
  return dispatch => {
    const requestBody = {
      new_password: new_password
    };

    return sendRequest(`user/reset_password/${token}`, 'PUT', requestBody)
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: CONSTANT.RESET_PASSWORD,
          });
          return true;
        } else {
          let error = new Error(response.statusText);
          error.response = response.data;
          throw error;
        }
      })
  }
}
