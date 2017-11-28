import * as CONSTANT from '../constants/app';

const initialState = {
  error: '',
  testData: [],
  notification: ''
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {

    case CONSTANT.SET_ERROR:
      return {
        ...state,
        error: action.payload.error
      };

    case CONSTANT.ADD_DATA:
      return {
        ...state,
        testData: [...state.testData, action.payload.data]
      };

    case CONSTANT.ADD_NOTIFICATION:
      return {
        ...state,
        notification: action.payload.notification
      };

    default:
      return state;
  }
};
