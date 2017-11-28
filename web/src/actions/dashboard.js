import * as CONSTANT from '../constants/dashboard';
import sendRequest from '../services/api';

export function getLocation(location) {
  return (dispatch) => {
    const requestBody = {address:location};

    return sendRequest(`weather/get_location`, 'POST', requestBody)
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: CONSTANT.GET_LOCATION,
            payload: {
              data: response.data,
            },
          });
          return response;
        } else {
          return response;
        }
      });
  }
}

export function getWeather(data) {
  return (dispatch) => {
    const requestBody = data;

    return sendRequest(`weather/get_weather`, 'POST', requestBody)
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: CONSTANT.GET_WEATHER,
            payload: {
              data: response.data.response,
            },
          });
          return true;
        } else {
          return false;
        }
      });
  }
}

export function getTourList(data) {
    return (dispatch) => {
        const requestBody = data;

        return sendRequest(`tour/get_list`, 'POST', requestBody)
            .then(response => {
                if (response.status === 200) {
                    dispatch({
                        type: CONSTANT.GET_WEATHER,
                        payload: {
                            data: response.data.response,
                        },
                    });
                    return response;
                } else {
                    return false;
                }
            });
    }
}