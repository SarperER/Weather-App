import * as actionTypes from "./actionTypes";

export function getWeatherSuccess(data) {
  return { type: actionTypes.GET_WEATHER_SUCCESS, payload: data };
}


export function getWeatherStatus(city) {
    if (city === undefined) {
        city = "Gaciantep"
    }
    return fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=UURCWWET42AWJHJDWW69NHB3Q&contentType=json`);
  }

  export function getWeatherTest(city) {
    return function (dispatch) {
      if (city === undefined) {
        city = "Antalya"
      }
      let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=UURCWWET42AWJHJDWW69NHB3Q&contentType=json`;
      return fetch(url)
        .then((response) => response.json())
        .then((data) => dispatch(getWeatherSuccess(data)));
    };
  }