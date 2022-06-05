import * as actionTypes from "../actions/actionTypes";
import initialState from "./İnitialState";

export default function WeatherReducer(
  state = initialState.weather,
  action
) {
  switch (action.type) {
    case actionTypes.GET_WEATHER_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}