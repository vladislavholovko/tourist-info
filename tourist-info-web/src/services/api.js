import * as APP_CONSTANT from '../constants/app.js';
// import fetch from '../core/fetch';

function checkStatus(response) {
  console.info('Response', response);
  if (!response || response.status === 500) {
    return Promise.reject(response);
  } else {
    return Promise.resolve(response);
  }
}

function parseJSON(response) {
  if (response.status === 204) {
    return Promise.resolve({
      status: response.status
    });
  }

  return Promise.resolve(
    response.json().then(json => {
      return {
          data: json,
          status: response.status
      };
    })
  );
}

export default function sendRequest(url = '', method = 'POST', data, dispatch) {
  const apiToken = localStorage.getItem('api_token') || '';
  let headers = {
    'Content-Type': 'application/json',
    'api_token': apiToken
  };
  let params = {
    method,
    headers,
  };

  if (JSON.stringify(data) !== JSON.stringify({})) {
    params.body = JSON.stringify(data);
  }

  if (process.env.NODE_ENV === 'development') {
    console.info('Send',APP_CONSTANT.API_URL + url, data);
  }
  return (fetch(APP_CONSTANT.API_URL + url, params)
    .then(checkStatus)
    .then(parseJSON)
    .then(response => {
      if (process.env.NODE_ENV === 'development') {
        console.info('Received', response);
      }
      return Promise.resolve(response);
    })
    .catch(response => {
      if (dispatch) {
        dispatch({
          type: 'SET_ERROR',
          payload: {
            error: 'Error'
          },
        });
      }
    })
  );
}
