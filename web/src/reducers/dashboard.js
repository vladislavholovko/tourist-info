import * as CONSTANT from '../constants/dashboard';

const initialState = {
  location: {},
  weather: {}
};

export default function dashboardReducer(state = initialState, action) {
  switch (action.type) {

    case CONSTANT.GET_LOCATION:
      return {
        ...state,
        location: action.payload.data
      };
    
    case CONSTANT.GET_WEATHER:
      return {
        ...state,
        weather: action.payload.data
      };
      case CONSTANT.GET_TOUR:
          return {
              ...state,
              tour: action.payload.data
          };
    default:
      return state;
  }
};
