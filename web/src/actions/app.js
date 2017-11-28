import * as CONSTANT from '../constants/app';

export function cleanError() {
  return (dispatch) => {
    dispatch({
      type: CONSTANT.SET_ERROR,
      payload: {
        error: '',
      },
    });

    return Promise.resolve();
  }
}

export function addData(data) {
  return (dispatch) => {
    dispatch({
      type: CONSTANT.ADD_DATA,
      payload: {
        data: data,
      },
    });

    return Promise.resolve();
  }
}

export function addNotification(notification) {
  return (dispatch) => {
    dispatch({
      type: CONSTANT.ADD_NOTIFICATION,
      payload: {
        notification: notification,
      },
    });

    return Promise.resolve();
  }
}
